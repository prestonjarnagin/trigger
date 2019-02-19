import { DISPLAY_ADD_FORM } from '../../actions/types'
import foodForm from '../../reducers/foodFormReducer'

describe('Food Form reducers test', () => {
  it('should have a initila state', () => {
    expect(foodForm(undefined, {type: 'unknown'})).toEqual({
      display: false
    })
  })

  it('should toggle the display to true', () => {
    expect(foodForm(undefined, {type: DISPLAY_ADD_FORM})).toEqual({
      display: true
    })
  })
})
