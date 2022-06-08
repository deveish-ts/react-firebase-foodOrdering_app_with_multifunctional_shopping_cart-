import React, { useEffect, useState } from 'react';
import classes from './AvailableMeal.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async function () {
      setIsLoading(true);
      const response = await fetch(
        'https://react-foods-28c4d-default-rtdb.firebaseio.com/meals.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong. Please try again later');
      }
      const responseData = await response.json();
      console.log(responseData);

      const loadedData = [];
      for (const key in responseData) {
        loadedData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedData);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section style={{ textAlign: 'center', color: 'black' }}>
        <h1>loading..</h1>
      </section>
    );
  }
  if (httpError) {
    return (
      <section style={{ textAlign: 'center', color: 'red' }}>
        <h1>{httpError}</h1>
      </section>
    );
  }

  const mealsList = meals.map((eachMeal) => {
    return (
      <MealItem
        key={eachMeal.id}
        id={eachMeal.id}
        name={eachMeal.name}
        description={eachMeal.description}
        price={eachMeal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
