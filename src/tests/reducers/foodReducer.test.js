import { FETCH_FOODS, NEW_FOOD, DESTROY_FOOD } from '../../actions/types'
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
      items: [],
      item: food,
      changedItem: {}
    })
  })

  it('should return and get for all the food/reaction items', () => {
    let foods = [
      { id: "68",type: "food",name: "Peas",time: 15000000 },
      { id: "69",type: "food",name: "Chocolate",time: 15000000 },
      { id: "70",type: "food",name: "Tea",time: 15000000 },
      { id: "71",type: "food",name: "Bread",time: 15000000 }
            ]
    expect(foodReducer(undefined, {type: FETCH_FOODS, payload: foods})).toEqual({
      items: foods,
      item: {},
      changedItem: {}
    })
  })

  it('should delete and item if we pass an id ', () => {
    let foods = [
      { id: "68",type: "food",name: "Peas",time: 15000000 },
      { id: "69",type: "food",name: "Chocolate",time: 15000000 },
      { id: "70",type: "food",name: "Tea",time: 15000000 },
      { id: "71",type: "food",name: "Bread",time: 15000000 }
            ]
    foodReducer(undefined, {type: FETCH_FOODS, payload: foods});

    expect(foodReducer(undefined, {type: DESTROY_FOOD, payload: foods[0].id})).toEqual({
      items: [],
      item: {},
      changedItem: foods[0].id
    })
  })
})
