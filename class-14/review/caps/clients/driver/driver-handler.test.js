const mockSocket = {
  emit: jest.fn(),
}; // we need a single reference to our spy function, we need to do this before we load the code that uses our mocked library.
const handlePickUp = require('./handlePickup.js');

// tells our test environment not to load socket.io-client
jest.mock('socket.io-client', () => {
  return {
    connect: () => mockSocket,  // our mockSocket will be returned when the connect method is called.
  };
});

beforeEach(() => {
  // console.log = jest.fn(); -> 
  jest.useFakeTimers(); // mocks timeout functionality
  jest.spyOn(console, 'log'); // keep our logger functionality, and spy on the invocation
});

describe('Testing the handlePickUp handler', () => { 
  test('Should console log', () => {
    jest.runAllTimers(); // lets jest track any timeout functionality and waits for those to end before we expect values to be present in the tests 
    handlePickUp({
      store: '1-206-flowers',
      orderId: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    });
    expect(console.log).toHaveBeenCalled();
    expect(mockSocket.emit).toHaveBeenCalled();
  });
});