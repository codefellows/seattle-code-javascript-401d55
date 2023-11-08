'use strict';

// the signature for all middleware
const logger = (store) => (next) => (action) => {
  const state = store.getState();
  console.log('MIDDLEWARE TRIGGERED!!!', action);
  console.log('CURRENT APP STATE', state);

  // if (!action.payload.name && action.type === 'ADD_TODO') {
  //   throw new Error('todo must include a name')
  // }

  next(action);
}

export default logger;