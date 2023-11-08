import { createSlice } from '@reduxjs/toolkit';

const categories = createSlice({
  name: 'categories',
  initialState: {
    list: [{
      name: 'ALL',
      displayName: 'All',
    },
    {
      name: 'SHIRTS',
      displayName: 'Shirts',
      description: 'Cool Shirts!'
    }, {
      name: 'PANTS',
      displayName: 'Pants',
      description: 'Cool Pants!'
    }, {
      name: 'SHOES',
      displayName: 'Shoes',
      description: 'Cool Shoes!'
    }],
    activeCategory: {
      name: 'ALL',
      displayName: 'All',
    },
  },
  reducers: {
    selectCategory: (state, action) => {
      console.log(action);
      state.activeCategory = action.payload;
    }
  }
});

export const { selectCategory } = categories.actions;

export default categories.reducer;
