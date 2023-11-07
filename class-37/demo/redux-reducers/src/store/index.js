import { createStore, combineReducers } from 'redux';
import productReducer from './products';
import categoryReducer from './categories';

const reducer = combineReducers({
  products: productReducer,
  categories: categoryReducer
});

export default createStore(reducer);