import React from 'react';
import { createUseStyles } from 'react-jss';
import Status from './status';
import Board from './board';
import History from './history';

const useStyles = createUseStyles({
  game: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const Game = () => {
  const c = useStyles();

  return (
    <div className={c.game}>
      <Status />
      <Board />
      <History />
    </div>
  );
};

export default Game;
