import { combineReducers } from 'redux';
import reducer from './app';

const rootReducer = combineReducers({
  app: reducer,
});

export default rootReducer;