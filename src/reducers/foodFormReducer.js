import { DISPLAY_ADD_FORM } from '../actions/types'

const initialState = {
  display: false,
}

const foodFormReducer = (state = initialState, action) => {
  let copyState = state
  switch (action.type) {
    case DISPLAY_ADD_FORM:
      return {display: !copyState.display}
    default:
      return state;
  }
};

export default foodFormReducer;

