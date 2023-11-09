import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, selectCategory } from '../../store/categories';

function Categories() {
  const categoryList = useSelector(state => state.categories.list);
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return(
    <>
      <h2>Active Category: {activeCategory ? activeCategory.name: "No category selected"}</h2>
      {categoryList.map((category, key) => {
        return (
          <button key={key} onClick={() => dispatch(selectCategory(category))}>
            <p>{category.name}</p>
            <p>{category.description}</p>
          </button>
        )
      })}
    </>
  )
}

export default Categories;