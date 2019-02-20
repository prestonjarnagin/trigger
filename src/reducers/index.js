import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import navReducer from './navReducer';
import calendarReducer from './calendarReducer';
import triggerReducer from './triggerReducer';

export default combineReducers({
  foods: foodReducer,
  nav: navReducer,
  calendar: calendarReducer,
  trigger: triggerReducer
});
