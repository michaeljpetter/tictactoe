import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './boot/store';
import App from './boot/app';

render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
