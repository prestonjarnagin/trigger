import { FETCH_TRIGGERS,
         FETCH_CURRENT_TRIGGER,
         INCREMENT_CURRENT_TRIGGER,
         DECREMENT_CURRENT_TRIGGER } from '../actions/types'

const initialState = {
  triggers: [],
  currentTrigger: 0,
  name: '',
  items: [],
  occurrences: {}
}

export default function(state = initialState, action) {
  switch (action.type) {

    case FETCH_TRIGGERS:
      return {
        ...state,
        triggers: action.payload
      }
    case FETCH_CURRENT_TRIGGER:
      return {
        ...state,
        name: action.payload.name,
        items: action.payload.foods,
        occurrences: action.payload.occurrences,
      }
    case INCREMENT_CURRENT_TRIGGER:
      return {
        ...state,
        currentTrigger: action.payload.currentTrigger,
      }
    case DECREMENT_CURRENT_TRIGGER:
      return {
        ...state,
        currentTrigger: action.payload.currentTrigger,
      }
    default:
      return state;
  }
}
