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
            body: JSON.stringify({
              [`${foodData.type}_id`]: response.id,
              time: foodData.time
            })
          })
          .then(response => response.json())
          foodData.id = response.id
          foodData.status = response.status
        }
        else {
          foodData.id = response.id
          foodData.status = response.status
        }
      })
      .then(food => dispatch({  // so food here is only a status...
        type: NEW_FOOD,
        payload: food  // which means our payload isn't a food, which breaks Foods.js componentWillReceiveProps
      })
  );

 }
