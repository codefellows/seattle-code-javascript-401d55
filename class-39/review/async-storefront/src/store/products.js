import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    addProduct: (state, action) => {
      state.list.push(action.payload);
    },
    updateProduct: (state, action) => {
      state.list = state.list.map(product => {
        if (product._id === action.payload._id) {
          return action.payload;
        } else {
          return product;
        }
      });
    },
    removeProduct: (state, action) => {
      state.list = state.list.filter(product => product._id !== action.payload._id);
    }
  }
});

export const { setList, addProduct, updateProduct, removeProduct } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setList(response.data.results));
}

export const createProduct = (productValues) => async (dispatch) => {
  const response = await axios
    .post('https://api-js401.herokuapp.com/api/v1/products', productValues);
  dispatch(addProduct(response.data.results));
}

export default productsSlice.reducer;