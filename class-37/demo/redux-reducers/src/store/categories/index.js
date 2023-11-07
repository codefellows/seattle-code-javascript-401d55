'use strict';

const initialState = {
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
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CATEGORY_SELECTED':
      return {
        ...state,
        activeCategory: payload
      }
    default:
      return state;
  }  
}

export const selectCategory = (category) => {
  return {
    type: 'CATEGORY_SELECTED',
    payload: category,
  }
}

export default reducer;