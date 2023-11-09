import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/products';

function Products() {
  const productList = useSelector(state => state.products.list);
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const displayActiveProducts = () => {
    if (!activeCategory) {
      return [{ name: 'Select a Category' }];
    } {
      return productList.filter(product => product.category === activeCategory.name);
    }
  }
  console.log('CURRENT LIST OF PRODUCTS', productList);
  return (
    <>
      <h2>Products</h2>
      {displayActiveProducts().map((product, key) => {
        return (
          <p key={key}>{product.name}</p>
        )
      })}
    </>
  )
}

export default Products;
