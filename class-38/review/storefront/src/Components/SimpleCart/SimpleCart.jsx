import { useSelector, useDispatch } from 'react-redux';

function SimpleCart() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  console.log('SimpleCart: cart', cart)

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  }

  return (
    <div className="simpleCart">
      <h2>Cart</h2>
      {cart.map((item, idx) => (
        <button onClick={() => removeItem(item)} key={idx}>{item.name}</button>
      ))}
    </div>
  );
}

export default SimpleCart;