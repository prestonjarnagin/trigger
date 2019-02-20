import { FETCH_FOODS, NEW_FOOD, DESTROY_FOOD, UPDATE_FOOD_ENTRY } from '../actions/types'
const initialState = {
  items: [],
  item: {},
  changedItem: {}
}
export default function(state = initialState, action) {
  let newState = state;

  switch (action.type) {
    case FETCH_FOODS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_FOOD:
      newState.items.push(action.payload)
      newState.items.sort((a,b) => a.attributes.time - b.attributes.time) 
      return {
        ...newState,
        item: action.payload
      }
    case DESTROY_FOOD:
      newState.items = state.items.filter(food => {
        return food.id !== action.payload.id;
      })

      return {
        ...newState,
        changedItem: action.payload
      }
    case UPDATE_FOOD_ENTRY:
      newState.items = state.items.map(food => {
        return food.id === action.payload.id ? action.payload : food
      }).sort((a, b) => a.time - b.time )

      return {
        ...newState,
        changedItem: action.payload
      }
    default:
     return state;

  }
}
