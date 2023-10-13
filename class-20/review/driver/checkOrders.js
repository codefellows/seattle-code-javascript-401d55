'use strict';
const { Consumer } = require('sqs-consumer');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const { SQSClient } = require('@aws-sdk/client-sqs');

const queueUrl = 'https://sqs.us-west-2.amazonaws.com/275199309843/orders.fifo';
const sns = new AWS.SNS();


// wait 5 seconds => emit "delivered" event
async function handleOrder (message) {
  let messageBody = JSON.parse(message.Body);
  let messagePayload = JSON.parse(messageBody.Message);

  const deliverHandledPayload = {
    Subject: 'Delivery for ' + messagePayload.customer,
    Message: messageBody.Message,
    TopicArn: messagePayload.vendorArn
  }

  setTimeout(() => {
    sns.publish(deliverHandledPayload).promise()
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log('ERROR OCCURRED WHEN PUBLISHING DELIVERY', e);
      })
  }, 5000);
}
 
const app = Consumer.create({
  queueUrl,
  handleMessage: handleOrder,
  sqs: new SQSClient({
    region: 'us-west-2',
  })
});

app.start();