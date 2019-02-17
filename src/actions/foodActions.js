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
  let foodEntryUrl = `https://trigger-backend.herokuapp.com/api/v1/${foodData.type}_entries`

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
          fetch(foodEntryUrl, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({ [`${foodData.type}_id`]: response.id, time: foodData.time })
          })
          .then(response => response.json())
          foodData.id = response.id
        }
        else {
          foodData.id = response.id
        }
      })
      .then(food => dispatch({  // so food here is only a status...
        type: NEW_FOOD,
        payload: food  // which means our payload isn't a food, which breaks Foods.js componentWillReceiveProps
      })
  );

 }

// We either need build a food object like this:
// payload: {
//   id: response.id,
//   type: foodData.type,
//   name: foodData.name,
//   time: foodData.time
// }

// or we need to ask BE to return the food_entry/reaction_entry in the response and send it as the payload

// for the time being, I prefer the first option
