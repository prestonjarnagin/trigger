import { FETCH_FOODS, NEW_FOOD, DESTROY_FOOD, UPDATE_FOOD_ENTRY } from './types';

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
  foodPost(foodData)
    .then(response => {
      foodEntryPost(foodData)
      .then(food => dispatch({
        type: NEW_FOOD,
        payload: preparePayload(food)
      }))
    })
}

export const updateFoodEntry = (foodData) => dispatch => {
  foodPost(foodData)
    .then(response => {
      foodEntryPatch(foodData)
      .then(food => dispatch({
        type: UPDATE_FOOD_ENTRY,
        payload: preparePayload(food)
      }))
    })
}

export const destroyFood = (foodData) => dispatch => {
  let url = `https://trigger-backend.herokuapp.com/api/v1/${foodData.type}_entries/${foodData.id}`
  fetch(url, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' }
  })
    .then(response => dispatch({
      type: DESTROY_FOOD,
      payload: {
        id: foodData.id,
        status: `Successfully deleted ${foodData.name} ${foodData.type} entry .`
      }
    }))
}

const foodPost = (foodData) => {
  let foodUrl = `https://trigger-backend.herokuapp.com/api/v1/${foodData.type}s`

  return fetch(foodUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(foodData)
  })
    .then(response => response.json())
    .then(json => {
      foodData.typeId = json.id;
      return foodData;
     })
}

const foodEntryPost = (foodData) => {
  let foodEntryUrl = `https://trigger-backend.herokuapp.com/api/v1/${foodData.type}_entries`

  return fetch(foodEntryUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      [`${foodData.type}_id`]: foodData.typeId,
      time: foodData.time
    })
  })
  .then(response => response.json())
  .then(json => {
    foodData.status = json.status;
    return foodData
  })
}

const foodEntryPatch = (foodData) => {
  let foodEntryUrl = `https://trigger-backend.herokuapp.com/api/v1/${foodData.type}_entries/${foodData.id}`

  return fetch(foodEntryUrl, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      [`${foodData.type}_id`]: foodData.typeId,
      time: foodData.time
    })
  })
    .then(response => response.json())
    .then(json => {
      foodData.status = json.status
      return foodData
    })
    //.catch(error => (c))
}

const preparePayload = (foodData) => {
  return {
    id: foodData.typeId,
    type: "day_summary",
    status: foodData.status,
    attributes: {
      time: foodData.time,
      type: foodData.type,
      name: foodData.name
    }
  }
}
