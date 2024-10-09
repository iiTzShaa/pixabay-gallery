import { combineReducers } from 'redux';
import photoReducer from './photoReducer';

export default combineReducers({
  photos: photoReducer,  // photos will be the key in the global Redux state
});