import {createSlice} from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
    list: [{
      name: 'my first todo'
    }],
  },
  reducers: {
    setTodos: (state, action) => {
      state.list = action.payload
    },
  }
});

export const { setTodos } = todos.actions;
export default todos.reducer;