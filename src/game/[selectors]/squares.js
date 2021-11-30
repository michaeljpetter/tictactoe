import { createSelector } from 'reselect';
import { playerSquares, winSquares } from './internal';
import currentPlayer from './current_player';

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
