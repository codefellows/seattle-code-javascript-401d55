import categoriesReducer, { selectCategory } from '../store/categories/slice.js';
import { configureStore } from '@reduxjs/toolkit';

describe('Testing the categories slice', () => {
  test('Making sure slice state has activeCategory', () => {
    let store = configureStore({
      reducer: categoriesReducer
    });

    let state = store.getState();
    expect(state.activeCategory.name).toEqual('ALL');

    store.dispatch(selectCategory({
      name: 'SHOES',
      displayName: 'Shoes',
      description: 'Cool Shoes!'
    }));

    state = store.getState();
    expect(state.activeCategory.name).toEqual('SHOES');
  });
})