import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.development';
import Cart from './Cart/Cart';
import Header from './LayOut/Header';
import Meals from './Meal/Meals';
import CartProvider from './store/CartProvider';
const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};
export default App;
