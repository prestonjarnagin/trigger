import { CHANGE_DATE, INCREMENT_DATE, DECREMENT_DATE } from './types';
import * as dateHelper from '../helpers/date';

export const changeDate = (date = new Date()) => dispatch => {
  dispatch({
    type: CHANGE_DATE,
    payload: {
      unixDate: date.setHours(0, 0, 0, 0) / 1000,
      displayDate: dateHelper.unixToDate(date)
    }
  })
};

export const incrementDate = (date = new Date()) => dispatch => {
  dispatch({
    type: INCREMENT_DATE,
    payload: {
      unixDate: date + 86400,
      displayDate: dateHelper.unixToDate(date + 86400)
    }
  })
}

export const decrementDate = (date = new Date()) => dispatch => {
  dispatch({
    type: DECREMENT_DATE,
    payload: {
      unixDate: date - 86400,
      displayDate: dateHelper.unixToDate(date - 86400)
    }
  })
}