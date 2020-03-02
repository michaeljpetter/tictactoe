import React from 'react';
import { createUseStyles } from 'react-jss';
import { render } from 'react-dom';
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
    <TicTacToe className={c.fill} />
  );
};

render(
  <Root />,
  document.getElementById('root')
);
