'use strict';
import { useSelector, useDispatch } from 'react-redux';

import React from 'react';

function Products() {
const state = useSelector(state => state.products);  

    return (
        <div className="products">
            <h2>Products</h2>
            <ul>
                {state.products.map((product, idx) => (
                    <div key={idx}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Inventory: {product.inventory}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}
export default Products;