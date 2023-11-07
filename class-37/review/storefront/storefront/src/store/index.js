import {createStore, combineReducers} from 'redux';
 import productsReducer from './products.js';

 let reducer = combineReducers({products: productsReducer});

 export default createStore(reducer);