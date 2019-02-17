import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import foodFormReducer from './foodFormReducer';

export default combineReducers({
  foods: foodReducer,
  foodForm: foodFormReducer
});
