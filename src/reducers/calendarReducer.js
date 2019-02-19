import { CHANGE_DATE, INCREMENT_DATE, DECREMENT_DATE } from '../actions/types'
import * as dateHelper from '../helpers/date';

const currentDate = () => {
  let now = new Date()

  return now.setHours(0, 0, 0, 0) / 1000
}

const initialState = {
  unixDate: currentDate(),
  displayDate: dateHelper.unixToDate(currentDate())
}

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATE:
      return {
        ...state,
        unixDate: action.payload.unixDate,
        displayDate: action.payload.displayDate
      }
    case INCREMENT_DATE:
      return {
        ...state,
        unixDate: action.payload.unixDate,
        displayDate: action.payload.displayDate
      }
    case DECREMENT_DATE:
      return {
        ...state,
        unixDate: action.payload.unixDate,
        displayDate: action.payload.displayDate
      }
    default:
      return state;
  }
};

export default calendarReducer;

