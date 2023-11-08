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

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log('Heres our CATEGORY payload:', action);
  switch (type) {
    case 'CHANGE_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: payload
      }
    default:
      return state;
  }  
}

// Action creator
// A payload just needs to be passed into the action creator, and that'll take care of talking to the reducer.
export const selectCategory = (category) => {
  return {
    type: 'CATEGORY_SELECTED',
    payload: category,
  }
}

export default reducer;