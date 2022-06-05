import React from 'react';
import MealsSummery from './MealsSummery';
import AvailableMeals from './AvailableMeals';
import { Fragment } from 'react/cjs/react.production.min';
const Meals = () => {
  return (
    <Fragment>
      <MealsSummery />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
