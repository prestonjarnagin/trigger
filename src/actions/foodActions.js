import { FETCH_FOODS, NEW_FOOD } from './types';

export const fetchFoods = () => dispatch =>  {
  fetch('https://trigger-backend.herokuapp.com/api/v1/day_summary?date=1550030400')
   .then(response => response.json())
   .then(foods => dispatch({
     type: FETCH_FOODS,
     payload: foods.data
   })
 );
}

export const createFood = (foodData) => dispatch => {
  const foodInfo = foodData
  fetch('https://trigger-backend.herokuapp.com/api/v1/foods', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(foodInfo)
  })
    .then(response => response.json())
      .then(response => {
        fetch('https://trigger-backend.herokuapp.com/api/v1/food_entries/', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({ food_id: response.id, time: foodInfo.time })
        })
      })
    .then(response => response.json())
    .then(food => dispatch({
      type: NEW_FOOD,
      payload: food.status
    })
  );

 }
