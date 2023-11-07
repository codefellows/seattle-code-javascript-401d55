// where the reducer lives
'use strict';

const initialState = {
  displayProducts: [],
  products: [
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
  categories: [{
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
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_ACTIVE_CATEGORY':
      console.log("taking action on payload", payload);
      return {
        ...state,
        activeCategory: payload,
        displayProducts: filterProducts(payload),
      };
    default:
      return state;
  }
};
function filterProducts(payload) {
  if (payload === 'ALL') {
    return initialState.products;
  }
  let results = initialState.products.filter(product =>
    product.category === payload
  )
  console.log(results);
  return results;
}

export default reducer;