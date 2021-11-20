import { createSelector } from 'reselect';
import { toWin } from '#/config/[selectors]';
import movesPerPlayer from './moves_per_player';
import potentialWins from './potential_wins';
import playerSquares from './player_squares';
import lastPlayer from './last_player';

export default createSelector(
  toWin,
  movesPerPlayer,
  potentialWins,
  playerSquares,
  lastPlayer,
  (toWin, movesPerPlayer, potential, playerSquares, lastPlayer) =>
    toWin <= movesPerPlayer[lastPlayer]?.length
      ? potential.filter(line => line.every(i => playerSquares[i] === lastPlayer))
      : []
);
