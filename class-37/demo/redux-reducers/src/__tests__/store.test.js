import store from '../store';
import { selectCategory } from '../store/categories';

describe('testing our global redux store', () => {
  test('Should have category and product into', () => {

    let state = store.getState();

    expect(state.products.list.length).toEqual(3);
    expect(state.products.displayList.length).toEqual(0);
    expect(state.categories.list.length).toEqual(4);
    expect(state.categories.activeCategory.name).toEqual('ALL');
  });

  test('Set active category, and update displayList', () => {
    store.dispatch(selectCategory({
      name: 'PANTS',
      displayName: 'Pants',
      description: 'Cool Pants!'
    }));

    let state = store.getState();

    expect(state.products.displayList.length).toEqual(1);
    expect(state.products.displayList[0].name).toEqual('Athletic Pants');
    expect(state.categories.activeCategory).toEqual({
      name: 'PANTS',
      displayName: 'Pants',
      description: 'Cool Pants!'
    });
  });
});