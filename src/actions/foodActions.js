import { FETCH_FOODS, NEW_FOOD } from './types';

export const fetchFoods = () => dispatch =>  {
  fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(foods => dispatch({
     type: FETCH_FOODS,
     payload: foods
   })
 );
}

export const createFood = (foodData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(foodData)
  })
    .then(response => response.json())
    .then(food => dispatch({
      type: NEW_FOOD,
      payload: food
    })
  );

 }
