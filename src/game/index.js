import React from 'react';
import { createUseStyles } from 'react-jss';
import Status from './status';
import Board from './board';
import History from './history';
import classNames from 'classnames';

const useStyles = createUseStyles({
  game: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const Game = ({
  className
}) => {
  const c = useStyles();

  return (
    <div className={classNames(c.game, className)}>
      <Status />
      <Board />
      <History />
    </div>
  );
};

export default Game;
