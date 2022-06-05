import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.development';
import Cart from './Cart/Cart';
import Header from './LayOut/Header';
import Meals from './Meal/Meals';
import CartProvider from './store/CartProvider';
const App = () => {
  const [cartIsShown, setIsCartIsShown] = useState(false);
  const showCartHandler = () => {
    setIsCartIsShown(true);
  };
  const hideCartHandler = () => {
    setIsCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};
export default App;
