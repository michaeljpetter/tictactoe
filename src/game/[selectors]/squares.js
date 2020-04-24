import { createSelector } from 'reselect';
import { gameOver, playerSquares, wins } from './internal';

export default createSelector(
  playerSquares,
  gameOver,
  wins,
  (playerSquares, gameOver, wins) => {
    const winSquares = new Set(wins.flat());

    return playerSquares.map((player, i) => ({
      player,
      canMakeMove: !gameOver && !player,
      isWin: winSquares.has(i)
    }));
  }
);
