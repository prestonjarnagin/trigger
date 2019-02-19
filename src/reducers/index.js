import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import foodFormReducer from './foodFormReducer';
import calendarReducer from './calendarReducer';

export default combineReducers({
  foods: foodReducer,
  foodForm: foodFormReducer,
  calendar: calendarReducer,
});
