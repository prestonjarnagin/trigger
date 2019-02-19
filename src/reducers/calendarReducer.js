import { CHANGE_DATE, INCREMENT_DATE, DECREMENT_DATE } from '../actions/types'

const currentDate = () => {
  let now = new Date()

  return now.setHours(0, 0, 0, 0) / 1000
}

const initialState = {
  unixDate: currentDate(),
}

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATE:
      return {
        ...state,
        unixDate: action.payload.unixDate,
      }
    case INCREMENT_DATE:
      return {
        ...state,
        unixDate: action.payload.unixDate,
      }
    case DECREMENT_DATE:
      return {
        ...state,
        unixDate: action.payload.unixDate,
      }
    default:
      return state;
  }
};

export default calendarReducer;
