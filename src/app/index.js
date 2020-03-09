import React, { useMemo } from 'react';
import { ThemeProvider } from 'react-jss';
import { Provider, useSelector } from 'react-redux';
import FontsProvider from './fonts_provider';
import * as fonts from '../fonts';
import { theme } from '@selectors';
import * as themes from '../themes';
import createStore from './create_store';
import App from './app';
import { get } from 'lodash/fp';

const ThemedApp = ({
  className
}) => (
  <FontsProvider fonts={fonts} preload>
    <ThemeProvider theme={get(useSelector(theme), themes)}>
      <App className={className} />
    </ThemeProvider>
  </FontsProvider>
);

const TicTacToe = ({
  className
}) => (
  <Provider store={useMemo(createStore, [])}>
    <ThemedApp className={className} />
  </Provider>
);

export default TicTacToe;
