import { createSelector } from 'reselect';
import { currentPlayer, playerSquares, winSquares } from './internal';

export default createSelector(
  playerSquares,
  winSquares,
  currentPlayer,
  (playerSquares, wins, currentPlayer) =>
    playerSquares.map((player, i) => ({
      player,
      isWin: !!wins[i],
      canMakeMove: !!currentPlayer && !player
    }))
);
