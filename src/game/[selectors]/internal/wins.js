import { createSelector } from 'reselect';
import { toWin } from '#/config/[selectors]';
import movesPerPlayer from './moves_per_player';
import potentialWins from './potential_wins';
import playerSquares from './player_squares';
import prevPlayer from './prev_player';

export default createSelector(
  toWin,
  movesPerPlayer,
  potentialWins,
  playerSquares,
  prevPlayer,
  (toWin, movesPerPlayer, potential, playerSquares, prevPlayer) =>
    toWin <= movesPerPlayer[prevPlayer]?.length
      ? potential.filter(line => line.every(i => playerSquares[i] === prevPlayer))
      : []
);
