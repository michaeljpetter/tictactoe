import { createSelector } from 'reselect';
import { ai } from '#/config/[selectors]';
import { currentPlayer, rankedMoves } from './internal';

export default createSelector(
  currentPlayer,
  ai,
  rankedMoves,
  (currentPlayer, ai, ranks) =>
    currentPlayer != null && ai[currentPlayer] ? ranks[0].move : null
);
