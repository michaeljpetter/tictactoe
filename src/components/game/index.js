import React from 'react';
import Status from './status';
import Board from './board';
import History from './history';

const Game = () => (
  <div className="game">
    <Status />
    <Board />
    <History />
  </div>
);

export default Game;
