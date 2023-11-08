import {createStore, combineReducers} from 'redux';
import productReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart';

const reducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer
});

export default createStore(reducer);