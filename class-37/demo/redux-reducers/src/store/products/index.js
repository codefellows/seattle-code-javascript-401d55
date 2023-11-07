'use strict';

const initialState = {
  displayList: [],
  list: [
    {
      category: 'SHIRTS',
      name: 'T-Shirt 1',
      description: 'An athletic shirt!',
      price: 20,
      inventory: 10,
    },
    {
      category: 'SHOES',
      name: 'Running Shoes',
      description: 'Shoes for running!',
      price: 100,
      inventory: 5,
    },
    {
      category: 'PANTS',
      name: 'Athletic Pants',
      description: 'Pants for walking!',
      price: 50,
      inventory: 25,
    }
  ],
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CATEGORY_SELECTED':
      return {
        ...state,
        displayList: filterProducts(state, payload),
      }
    default:
      return state;
  }
}

function filterProducts(state, payload) {
  if (payload.name === 'ALL') {
    return state.list;
  }
  let results = state.list.filter(product =>
    product.category === payload.name
  )
  console.log(results);
  return results;
}

export default reducer;