import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store';
import App from './app';
import './style/index.css';

render(
  <Provider store={createStore(reducers)}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
