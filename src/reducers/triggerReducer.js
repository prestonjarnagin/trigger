import { FETCH_TRIGGER } from '../actions/types'

const initialState = {
  name: '',
  items: [],
  occurences: {},
  // message: ''
}

export default function(state = initialState, action) {
  switch (action.type) {

    case FETCH_TRIGGER:
      return {
        ...state,
        name: action.payload.name,
        items: action.payload.foods,
        occurences: action.payload.occurences,
        // message: action.payload.message // haven't decieded if it going to be implemented
      }

    default:
    return state;
  }
}
