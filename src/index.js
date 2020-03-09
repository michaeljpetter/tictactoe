import React from 'react';
import { createUseStyles } from 'react-jss';
import { render } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import TicTacToe from './app';

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
      <TicTacToe className={c.fill} />
    </HelmetProvider>
  );
};

render(
  <Root />,
  document.getElementById('root')
);
