'use strict';
import axios from 'axios';

const initialState = {
  list: [{
    name: 'my first todo'
  }],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_TODOS':
      return {
        list: action.payload,
      }
    case 'ADD_TODO':
      return {
        list: [...state.list, action.payload]
      }
    default:
      return state;
  }
}

export const fetchTodos = () => async (dispatch) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
  dispatch({
    type: "FETCH_TODOS",
    payload: response.data.results,
  });
}

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  }
}

export default reducer;
