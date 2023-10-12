'use strict';

const { Consumer } = require('sqs-consumer');
const { SQSClient } = require('@aws-sdk/client-sqs');

const queueUrl = 'https://sqs.us-west-2.amazonaws.com/275199309843/BananaMessages';

const app = Consumer.create({
  queueUrl,
  handleMessage: async (message) => {
    let messageBody = JSON.parse(message.Body);
    console.log('WE HAVE A NEW MESSAGE!', messageBody);
  },
  sqs: new SQSClient({
    region: 'us-west-2',
  })
});

app.on('error', (e) => {
  console.log('ERROR OCCURED IN QUEUE', e);
});

app.start(); // starts listening for messages from the Queue.