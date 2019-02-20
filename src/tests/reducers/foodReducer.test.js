import { FETCH_FOODS, NEW_FOOD, DESTROY_FOOD, UPDATE_FOOD_ENTRY } from '../../actions/types'
import foodReducer from '../../reducers/foodReducer'

describe('Food Reducer test', () => {
  it('should have a default value', ()=> {
    expect(foodReducer(undefined, {type: 'unknown'})).toEqual({
      items: [],
      item: {},
      changedItem: {}
    })
  })

  it('should return and food/reaction item', () => {
    let food = { id: "68",
                type: "food",
                name: "Peas",
                time: 15000000
              }
    expect(foodReducer(undefined, {type: NEW_FOOD, payload: food})).toEqual({
      items: [food],
      item: food,
      changedItem: {}
    })
  })

  const foods = [
    { id: "68",type: "food",name: "Peas",time: 15000000 },
    { id: "69",type: "food",name: "Chocolate",time: 15000000 },
    { id: "70",type: "food",name: "Tea",time: 15000000 },
    { id: "71",type: "food",name: "Bread",time: 15000000 }
          ]
  const getState = {
    type: FETCH_FOODS,
    payload: foods
   }
  const state = foodReducer(undefined, getState)

  it('should return and get for all the food/reaction items', () => {
    const expected = { items: foods, item: {}, changedItem: {} }

    expect(state).toEqual(expected)
  })

  it('should delete an item if we pass an id ', () => {
    const action = {
      type: DESTROY_FOOD,
      payload: {id: foods[0].id, status: " "}
     }

    const expected = {
      items: [foods[1],foods[2],foods[3]],
      item: {},
      changedItem: {id: foods[0].id, status: " "}
    }

    const result = foodReducer(state, action)

    expect(result).toEqual(expected)
  })

  it('should update an item if we pass an id ', () => {
    let new_attr = {id: "68", type: "food", attributes: { name: "Beer", time: 15000300 }}
    const foodsUpdate = [
      { id: "68",type: "food",attributes: {name: "Peas",time: 15000000 }},
      { id: "69",type: "food",attributes: {name: "Chocolate",time: 15000000 }},
      { id: "70",type: "food",attributes: {name: "Tea",time: 15000000 }},
      { id: "71",type: "food",attributes: {name: "Bread",time: 15000000} }
            ]
    const action = {
      type: UPDATE_FOOD_ENTRY,
      payload: new_attr
     }

    const new_state = foodReducer(undefined, { type: FETCH_FOODS, payload: foodsUpdate })

    const expected = {
       items: [new_attr, foodsUpdate[1], foodsUpdate[2], foodsUpdate[3]],
       item: {},
       changedItem: new_attr
     }
    const result = foodReducer(new_state, action)

    expect(result).toEqual(expected)
  })
})
