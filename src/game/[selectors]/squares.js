import { createSelector } from 'reselect';
import { gameOver, playerSquares, winLines } from './internal';

export default createSelector(
  playerSquares,
  gameOver,
  winLines,
  (playerSquares, gameOver, winLines) => {
    const winSquares = new Set(winLines.flat());

    return playerSquares.map((player, i) => ({
      player,
      canMakeMove: !gameOver && !player,
      isWin: winSquares.has(i)
    }));
  }
);
