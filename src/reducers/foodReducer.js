import { FETCH_FOODS, NEW_FOOD, DESTROY_FOOD } from '../actions/types'

const initialState = {
  items: [],
  item: {},
  changedItem: {}
}
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FOODS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_FOOD:
      return {
        ...state,
        item: action.payload
      }
    case DESTROY_FOOD:
      let newState = state;
      newState.items = state.items.filter(food => {
        return food.id !== action.payload.id;
      })

      return {
        ...newState,
        changedItem: action.payload
      }

    default:
     return state;

  }
}
