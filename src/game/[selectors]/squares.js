import { createSelector } from 'reselect';
import { ai } from '#/config/[selectors]';
import { playerSquares, winSquares } from './internal';
import currentPlayer from './current_player';

export default createSelector(
  playerSquares,
  winSquares,
  currentPlayer,
  ai,
  (playerSquares, winSquares, currentPlayer, ai) =>
    playerSquares.map((player, i) => ({
      player,
      isWin: !!winSquares[i],
      canMakeMove: currentPlayer != null && !ai[currentPlayer] && player == null
    }))
);
