const { S3Client, GetObjectCommand, PutObjectCommand, S3 } = require('@aws-sdk/client-s3'); // code preinstalled by AWS, to do S3 operations -> Reading and Writing

let s3client = new S3({ region: 'us-west-2' });

// this is not banana, your lambda must export a function named "handler"
exports.handler = async (event) => {
  console.log('Lambda code is running!');
  const bucketName = event.Records[0].s3.bucket.name;
  const fileName = event.Records[0].s3.object.key;

  // read command using the sdk
  const command = {
    Bucket: bucketName,
    Key: fileName
  }
  let result = await s3client.getObject(command);
  // let objectFromBucket = await result.resolve();

  let string = await result.Body.transformToString();

  console.log(string);

  console.log('Bucket name:', bucketName);
  console.log('File name:', fileName);

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Added ' + fileName + 'to the manifest'),
  }; // lambdas use some of the same practices that HTTP servers.
  return response;
};
