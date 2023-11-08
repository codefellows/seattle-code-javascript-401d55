import store from '../store';
import { addTodo, fetchTodos } from '../store/todos';

describe('Testing the todo reducer', () => {
  test('Should add a todo to the list', () => {
    store.dispatch(addTodo({ name: 'testing' }));

    let state = store.getState();
    expect(state.todos.list[1].name).toEqual('testing');
  });

  test('Should fetch todos from the api', async () => {
    await store.dispatch(fetchTodos());

    let state = store.getState();
    console.log(state.todos);
    expect(state.todos.list.length).toEqual(1);
  });
});
