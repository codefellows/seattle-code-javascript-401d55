'use strict';
import { useSelector, useDispatch } from 'react-redux';

import React from 'react';

function Products() {
  const dispatch = useDispatch();
  // this tells it to return only the products from the state that are in the displayList
  const state = useSelector(state => state.products.displayList);  
  // console.log('Products: state', state);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="products">
      {state.map((product, idx) => (
        <div key={idx}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Inventory: {product.inventory}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
export default Products;