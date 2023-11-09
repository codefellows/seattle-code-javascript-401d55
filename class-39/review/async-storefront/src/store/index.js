import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './categories.js';
import productsReducer from './products.js';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer
});

export default configureStore({
  reducer: rootReducer,
});
