'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:275199309843:banana' //arn from aws

const payload = {
  Subject: 'I love publishing',
  Message: 'Hello from Node!',
  TopicArn: topic,
}

// function handlePublish(err, data) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// }

sns.publish(payload).promise() // method for using promise syntax
.then(data => {
  console.log(data);
})
.catch(e => {
  console.error('SOMETHING WENT WRONG', e);
});