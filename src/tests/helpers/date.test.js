import * as dateHelper from '../../helpers/date';

describe('dateHelper test',() => {
  // it('should get the date sending a unix date', () =>{
  //   const expected = "February 12, 2019"
  //   const result = dateHelper.unixToDate(1550030400)
  //   expect(result).toEqual(expected)
  // })

  // it('should get the previous and the next date in unix time', () => {
  //   const expected = {
  //     "currDate": {"date": 12, "day": "Tues"},
  //     "nextDate": {"date": 13, "day": "Wed"},
  //     "prevDate": {"date": 11, "day": "Mon"}
  //   }
  //   const result = dateHelper.unixToDateArray(1550030400)
  //   expect(result).toEqual(expected)
  // })

  // it('should return the  unix time in the format 12:00 PM', () => {
  //   const expected = "9:00 PM"
  //   const result = dateHelper.unixDateToTime(1550030400)
  //   expect(result).toEqual(expected)
  // })

  it('should return the hours and date in unix time', () => {
    const expected = 1550106000
    const result = dateHelper.hoursToUnixTime("9:00 PM", 1550030400)
    expect(result).toEqual(expected)
  })

  it('should return the parse hours time', () => {
    const expected = "10:00 AM"
    const result = dateHelper.convert24HourTime("10", "00")
    expect(result).toEqual(expected)
  })

  it('should return the string with the hours', () => {
    const expected = 10
    const result = dateHelper.convertHours("10:00 am".replace(/ /g,''), 7, "am")
    expect(result).toEqual(expected)
  })
})
