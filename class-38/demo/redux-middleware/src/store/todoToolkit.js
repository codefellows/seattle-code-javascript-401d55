import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  list: [{
    name: 'my first todo'
  }],
}

export const setTodos = createAction('SET_TODOS');
export const addTodo = createAction('ADD_TODO');

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setTodos, (state, action) => {
      state.list = action.payload
    })
    .addCase(addTodo, (state, action) => {
      state.list.push(action.payload);
    })
});


export const fetchTodos = () => async (dispatch) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
  dispatch(setTodos(response.data.results));
}

export default reducer;