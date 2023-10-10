'use strict'

const { handler } = require('./index.js');

describe('testing handler', () => {
  test('Should response to an upload', async () => {
    let event = {
      Records: [
        {
          s3: {
            bucket: {
              name: 'test-bucket'
            },
            object: {
              key: 'test-file'
            }
          }
        }
      ]
    }

    let response = await handler(event);
    expect(response.statusCode).toEqual(200);
  });
})