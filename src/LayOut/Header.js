import React from 'react';
import { Fragment } from 'react/cjs/react.development';
import style from './Header.module.css';
import HeaderImg from '../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={style['main-image']}>
        <img src={HeaderImg} alt="headerImg" />
      </div>
    </Fragment>
  );
};

export default Header;
