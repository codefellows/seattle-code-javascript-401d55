import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// we are creating what redux calls a "slice".

// a redux store needs actions -> object that tell the reducer what to do.
// also it needs a reducer -> function that return new state.
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    activeCategory: null,
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    addCategory: (state, action) => {
      state.list.push(action.payload);
    },
    selectCategory: (state, action) => {
      state.activeCategory = action.payload;
    }
  }
});


export const { setList, addCategory, selectCategory } = categoriesSlice.actions;

// async action.
export const fetchCategories = () => async (dispatch) => {
  const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setList(response.data.results));
}

export const createCategory = (categoryValues) => async (dispatch) => {
  const response = await axios
    .post('https://api-js401.herokuapp.com/api/v1/categories', categoryValues);
  dispatch(addCategory(response.data.results));
}

export default categoriesSlice.reducer;