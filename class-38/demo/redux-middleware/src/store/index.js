import { createStore, applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './todos';
import logger from './middlewares/logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  todos: todoReducer,
});

// use createStore with the legacy redux code
// export default createStore(reducers, applyMiddleware(thunk));

// use configure store with newer redux-toolkit code, no need to add the thunk!
export default configureStore({
  reducer: reducers, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
