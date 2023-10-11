import { S3 } from '@aws-sdk/client-s3'; // code preinstalled by AWS, to do S3 operations -> Reading and Writing

let s3client = new S3({ region: 'us-west-2' });

// this is not banana, your lambda must export a function named "handler"
export const handler = async (event) => {

  let fileExtensionRegex = new RegExp('\.[a-zA-Z0-9]+$');

  console.log('Lambda code is running!');
  const bucketName = event.Records[0].s3.bucket.name;
  const fileName = event.Records[0].s3.object.key;
  const fileSize = event.Records[0].s3.object.size;
  const fileExtension = event.Records[0].s3.object.key.match(fileExtensionRegex)[0];

  const imageInfo = {
    name: fileName,
    size: fileSize,
    type: fileExtension
  }

  console.log('OUR NEWLY ADDED FILE', imageInfo);

  // read command using the sdk
  const command = {
    Bucket: bucketName,
    Key: 'images.json'
  }

  let imagesArray = null;

  try {
    let result = await s3client.getObject(command);
    // result is an array here

    let stringifiedArray = await result.Body.transformToString();

    //strinigifiedArray.json(); // parse the string as json
    imagesArray = JSON.parse(stringifiedArray);
    imagesArray.push(imageInfo);

  } catch (e) {
    console.log('ERROR OCCURED WHEN READING image.json FILE', e);
    if (e.Code === 'NoSuchKey') {
      // create a new Array, save to images.json
      imagesArray = [];
      imagesArray.push(imageInfo);
    }
  }

  console.log('OUR IMAGES ARRAY: ', imagesArray);

  command.Body = JSON.stringify(imagesArray);

  try {
    let result = await s3client.putObject(command);
    console.log(result);
  } catch (e) {
    console.log(e);
  }

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Added ' + fileName + 'to the manifest'),
  }; // lambdas use some of the same practices that HTTP servers.
  return response;
};
