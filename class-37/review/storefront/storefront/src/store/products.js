'use strict';

const products = [
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
  },
]
const initialState = {
    activeCategory: 'ALL', // Default active category
    products,
  };

  const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'CHANGE_ACTIVE_CATEGORY':
        console.log("taking action on payload", payload);
        return {
          ...state,
          products: filterProducts(payload),
        };
      default:
        return state;
    }
  };
  function filterProducts (payload) {
    if (payload === 'ALL'){
      return products;
    }
    let results = products.filter(product => 
      product.category === payload
    )
    console.log(results);
    return results;
  }
  
  export default productsReducer;
  