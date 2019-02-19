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
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(foodData)
})
  .then(response => response.json())
  .then(json => {
    if (!isNaN(foodData.time)) {
      foodEntryPost(json, foodData)
      addStatus(json, foodData)
      return foodData
    }
    else {
      updateFoodData(json, foodData)
      return foodData
    }
  })
  .then(food => dispatch({
    type: NEW_FOOD,
    payload: food
  }))
  .catch(error => dispatch({
    type: NEW_FOOD,
    payload: {
      status: `Something went wrong. ${foodData.name} couldn't be created.`
    }
  }))
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

const updateFoodData = (response, foodData) => { 
  foodData.id = response.id
  foodData.status = response.status
}

const addStatus = (response, foodData) => { 
  response.status = `Created entry for ${foodData.name} at ${dateHelper.unixDateToTime(foodData.time)}`
  updateFoodData(response, foodData)
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
