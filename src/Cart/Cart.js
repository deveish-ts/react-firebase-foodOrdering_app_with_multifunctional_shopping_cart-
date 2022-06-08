import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import CartContext from '../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CheckOut from './CheckOut';
const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.item.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const confirmHandler = (userData) => {
    fetch('https://react-foods-28c4d-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orders: cartCtx.item,
      }),
    });
  };
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && (
        <CheckOut onClose={props.onClose} onConfirm={confirmHandler} />
      )}
      {!isCheckOut && (
        <div className={classes.actions}>
          <button className={classes['button-alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button
              className={classes.button}
              onClick={() => {
                setIsCheckOut(true);
              }}
            >
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
