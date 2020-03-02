import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import createStore from './store';
import { solarized } from '../themes';
import App from './app';

const TicTacToe = ({
  className
}) => (
  <Provider store={createStore()}>
    <ThemeProvider theme={solarized}>
      <App className={className} />
    </ThemeProvider>
  </Provider>
);

export default TicTacToe;
