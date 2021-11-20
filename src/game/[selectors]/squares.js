import { createSelector } from 'reselect';
import { currentPlayer, playerSquares, winSquares } from './internal';

export default createSelector(
  playerSquares,
  winSquares,
  currentPlayer,
  (playerSquares, winSquares, currentPlayer) =>
    playerSquares.map((player, i) => ({
      player,
      isWin: !!winSquares[i],
      canMakeMove: currentPlayer != null && player == null
    }))
);
