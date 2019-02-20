import { DISPLAY_ADD_FORM, DISPLAY_ANALYTICS } from '../actions/types'

const initialState = {
  displayAddForm: false,
  displayAnalytics: false,
}

const navReducer = (state = initialState, action) => {
  let newState = state
  switch (action.type) {
    case DISPLAY_ADD_FORM:
      return {
        displayAddForm: !newState.displayAddForm,
        displayAnalytics: newState.displayAnalytics
      }
    case DISPLAY_ANALYTICS:
      return {
        displayAddForm: newState.displayAddForm,
        displayAnalytics: !newState.displayAnalytics
      }
    default:
      return state;
  }
};

export default navReducer;
