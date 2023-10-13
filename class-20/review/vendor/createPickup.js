'use strict';

const Chance = require('chance');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const sns = new AWS.SNS();
const chance = new Chance();

const topicArn = 'arn:aws:sns:us-west-2:275199309843:pickup.fifo';

const orderPayload = {
  store: 'Jacobs-Bananas',
  customer: 'Anthony C.',
  address: '123 Bikini Bottom',
  orderId: '12345',
  vendorArn: 'arn:aws:sns:us-west-2:275199309843:delivered'
}

const TopicMessage = {
  Subject: 'New Order ready!',
  Message: JSON.stringify(orderPayload),
  TopicArn: topicArn,
  MessageGroupId: 'pickup',
  MessageDeduplicationId: chance.guid(),
}

sns.publish(TopicMessage).promise()
.then(response => {
  console.log('RESPONSE FROM AWS TOPIC', response);
})
.catch(e => {
  console.log('ERROR OCCURRED ON PUBLISH', e);
})