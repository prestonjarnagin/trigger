import { CHANGE_DATE, INCREMENT_DATE, DECREMENT_DATE } from '../../actions/types'
import calendar from '../../reducers/calendarReducer'
import * as dateHelper from '../../helpers/date';

const defaultDate = () => {
  let today = new Date();
  let month = today.toLocaleString('en-us', { month: 'long' });
  let date = month + " " + today.getDate() + ", " + today.getFullYear();

  return date;
}
const currentDate = Date.parse(defaultDate()) / 1000;

describe('Calendar Reducer test', () => {
  it('should have a initial state', () => {


    expect(calendar(undefined, {type: 'unknown'})).toEqual({
      unixDate: Date.parse(defaultDate())/1000,
    })
  })

  it('should be able to change the date', () => {
    let unixTime: 0;
    let date = "January 1, 1970"

    expect(calendar(undefined, {type: CHANGE_DATE , payload: {unixDate: unixTime}})).toEqual({
      unixDate: unixTime
    })
  })

  it('should be able to increment the date by 24 hours', () => {
    let unixTime = currentDate + 86400
    let date = "February 19, 2019";

    expect(calendar(undefined, {type: INCREMENT_DATE , payload: {unixDate: unixTime }})).toEqual({
      unixDate: unixTime
    })
  })

  it('should be able to decremente the date by 24 hours', () => {
    let unixTime =  currentDate - 86400
    let date = "February 17, 2019"

    expect(calendar(undefined, {type: DECREMENT_DATE , payload: {unixDate: unixTime}})).toEqual({
      unixDate: unixTime
    })
  })
})
