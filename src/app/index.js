import React, { useMemo } from 'react';
import { ThemeProvider } from 'react-jss';
import { Provider, useSelector } from 'react-redux';
import { theme } from './[selectors]';
import * as themes from '#/themes';
import { createStore } from '#/store';
import App from './app';

const ThemedApp = ({
  className
}) => (
  <ThemeProvider theme={themes[useSelector(theme)]}>
    <App className={className} />
  </ThemeProvider>
);

const TicTacToe = ({
  className
}) => (
  <Provider store={useMemo(createStore, [])}>
    <ThemedApp className={className} />
  </Provider>
);

export default TicTacToe;
