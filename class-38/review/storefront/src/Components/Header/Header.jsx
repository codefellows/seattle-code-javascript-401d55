import React from 'react';
import { useSelector } from 'react-redux';

function Header({ storeName }) {
  const cart = useSelector(state => state.cart);
  const cartCount = cart.length;

  return (
    <div className="header">
      <h1>{storeName}</h1>
      <p>Cart ({cartCount})</p>
    </div>
  );
}
export default Header;
