'use strict';

const initialState = {
  list: [
    {
      id: 1,
      category: 'SHIRTS',
      name: 'T-Shirt 1',
      description: 'An athletic shirt!',
      price: 20,
      inventory: 10,
    },
    {
      id: 2,
      category: 'SHOES',
      name: 'Running Shoes',
      description: 'Shoes for running!',
      price: 100,
      inventory: 5,
    },
    {
      id: 3,
      category: 'PANTS',
      name: 'Athletic Pants',
      description: 'Pants for walking!',
      price: 50,
      inventory: 25,
    }
  ],
}
initialState.displayList = [...initialState.list]; // added to it loads all the products on page load

const reducer = (state = initialState, action) => {
  // console.log('Heres our PRODUCTS payload:', action);
  const { type, payload } = action;
  switch (type) {
  case 'ADD_TO_CART':
    return {
      ...state,
      list: handleProductInventory(state, payload),
    }
  case 'CHANGE_ACTIVE_CATEGORY':
    return {
      ...state,
      displayList: filterProducts(state, payload),
    }
  default:
    return state;
  }
}

// increments or decrement state.list product inventory
function handleProductInventory(state, cartItem) {

  return state.list;
}

function filterProducts(state, payload) {
  // console.log('Filtering products by state:', state, 'and payload', payload);
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