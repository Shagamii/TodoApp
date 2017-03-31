import { combineReducers } from 'redux';

import todoApp from './todoApp';

const rootReducer = combineReducers({
  todoApp
});

export default rootReducer;
