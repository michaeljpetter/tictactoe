import React from 'react';
import { createUseStyles } from 'react-jss';
import { render } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { FontsProvider } from '#/ext/fonts';
import * as fonts from '#/res/fonts';
import TicTacToe from '#/app';

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
    }
  },
  fill: {
    height: '100vh'
  }
});

const Root = () => {
  const c = useStyles();

  return (
    <HelmetProvider>
      <FontsProvider fonts={fonts} preload>
        <TicTacToe className={c.fill} />
      </FontsProvider>
    </HelmetProvider>
  );
};

render(
  <Root />,
  document.getElementById('root')
);
