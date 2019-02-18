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
  let foodUrl = `https://trigger-backend.herokuapp.com/api/v1/${foodData.type}s`

  fetch(foodUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(foodData)
  })
    .then(response => response.json())
      .then(response => {
        if (foodData.time !== "") {
          foodEntryPost(response, foodData)
          chanceFoodData(response, foodData)
          return foodData
        }
        else {
          chanceFoodData(response, foodData)
          return foodData
        }
      })
      .then(food => dispatch({
        type: NEW_FOOD,
        payload: food
      })
  );
 }

const foodEntryPost = (response, foodData) => {
  let foodEntryUrl = `https://trigger-backend.herokuapp.com/api/v1/${foodData.type}_entries`

  fetch(foodEntryUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      [`${foodData.type}_id`]: response.id,
      time: foodData.time
    })
  })
  .then(response => response.json())
}

const chanceFoodData = (response, foodData) => { // this method is only updating the status of the foodData variable
  foodData.id = response.id
  foodData.status = response.status
}
