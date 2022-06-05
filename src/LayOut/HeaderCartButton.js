import React, { useContext, useEffect, useState } from 'react';
import style from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';
const HeaderCartButton = (props) => {
  const [btnIsHighLite, setbtnIsHighLite] = useState(false);

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.item.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  useEffect(() => {
    if (cartCtx.item.length === 0) {
      return;
    }
    setbtnIsHighLite(true);

    const timer = setTimeout(() => {
      setbtnIsHighLite(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.item]);
  const btnClass = `${style.button} ${btnIsHighLite ? style.bump : ''}`;
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
