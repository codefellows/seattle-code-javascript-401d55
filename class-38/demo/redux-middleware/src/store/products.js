import { createSlice } from '@reduxjs/toolkit';

// export const addProduct = createAction('ADD_PRODUCT');

const products = createSlice({
  name: 'products',
  initialState: {
    list: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.list.push(action.payload);
    },
  }
});

export default products.reducer;
