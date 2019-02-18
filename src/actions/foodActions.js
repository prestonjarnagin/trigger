import { FETCH_FOODS, NEW_FOOD, DESTROY_FOOD } from './types';
import * as dateHelper from '../helpers/date';

export const fetchFoods = (date) => dispatch =>  {
  fetch(`https://trigger-backend.herokuapp.com/api/v1/day_summary?date=${date}`)
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
      createEntry(response, foodData)
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

const createEntry = (response, foodData) => {
  if (response.status === `${foodData.name} is a duplicate`) {
    response.status = `Created entry for ${foodData.name} at ${dateHelper.unixDateToTime(foodData.time)}`
  }
  chanceFoodData(response, foodData)
}

export const destroyFood = (foodData) => dispatch => {
  let url = `https://trigger-backend.herokuapp.com/api/v1/${foodData.type}_entries/${foodData.id}`
  fetch(url, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => {
      if(response.ok) {
        dispatch({
          type: DESTROY_FOOD,
          payload: {
            id: foodData.id,
            status: `Successfully deleted ${foodData.name} ${foodData.type} entry .`
          }
        })
      } else {
        dispatch({
          type: DESTROY_FOOD,
          payload: {
            id: foodData.id,
            status: `Something went wrong.  Unable to delete ${foodData.name} ${foodData.type} entry .`
          }
        })
      }
    });
}
