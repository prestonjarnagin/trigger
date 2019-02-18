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
                name: "Peas"
              }
    expect(foodReducer(undefined, {type: NEW_FOOD}))

  })
})
