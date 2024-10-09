import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Correct import for redux-thunk
import rootReducer from './reducers';  // Your combined reducer

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)  // Apply thunk middleware
);

export default store
