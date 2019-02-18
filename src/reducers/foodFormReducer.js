import { DISPLAY_ADD_FORM } from '../actions/types'

const initialState = {
  display: false,
}

const foodFormReducer = (state = initialState, action) => {
  let newState = state
  switch (action.type) {
    case DISPLAY_ADD_FORM:
      return {display: !newState.display}
    default:
      return state;
  }
};

export default foodFormReducer;

