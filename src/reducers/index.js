import { combineReducers } from 'redux';
import users from './users';
import tweets from './questions';

export default combineReducers({
  users,
  tweets,
})