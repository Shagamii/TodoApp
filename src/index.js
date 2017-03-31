import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './Reducers';

let store = createStore(rootReducer);

import TodoApp from './TodoApp.js';
import './index.css';

ReactDOM.render(
  <Provider store={ store }>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
