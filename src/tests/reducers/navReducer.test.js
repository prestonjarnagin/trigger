import { DISPLAY_ADD_FORM, DISPLAY_ANALYTICS } from '../../actions/types'
import navReducer from '../../reducers/navReducer'

describe('Food Form reducers test', () => {
  it('should have a initila state', () => {
    expect(navReducer(undefined, {type: 'unknown'})).toEqual({
      displayAddForm: false,
      displayAnalytics: false,
    })
  })

  it('should toggle the display to true', () => {
    expect(navReducer(undefined, {type: DISPLAY_ADD_FORM})).toEqual({
      displayAddForm: true,
      displayAnalytics: false,
    })
  })
  it('should toggle the display for the analytics to true', () => {
    expect(navReducer(undefined, {type: DISPLAY_ANALYTICS})).toEqual({
      displayAddForm: false,
      displayAnalytics: true,
    })
  })
})
