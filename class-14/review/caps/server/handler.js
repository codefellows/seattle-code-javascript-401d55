const handleGlobalPackageEvents = (eventName, payload) => {
  const event = {
    event: eventName,
    time: new Date(),
    payload: payload,
  };
  console.log('EVENT:', event);
};
  
module.exports = handleGlobalPackageEvents;