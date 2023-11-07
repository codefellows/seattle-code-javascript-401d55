// the unit test to validate our reducer code

import reducer from './index';
import { createStore } from 'redux';

describe('Testing the categories reducer', () => {
  test('Should contain state with activeCategory, products and displayProducts', () => {
    let store = createStore(reducer);

    let state = store.getState();
    expect(state.activeCategory.name).toEqual('ALL');
    expect(state.products.length).toEqual(3);
    expect(state.categories.length).toEqual(4);
    expect(state.displayProducts.length).toEqual(0);
  });
  test('Should display all shirts with the shirt category is selected', () => {
    let store = createStore(reducer);
    store.dispatch({
      type: 'CHANGE_ACTIVE_CATEGORY',
      payload: 'SHIRTS'
    });

    let state = store.getState();
    console.log(state);
    expect(state.displayProducts.length).toEqual(1);
    expect(state.activeCategory).toEqual('SHIRTS');
  })
});
