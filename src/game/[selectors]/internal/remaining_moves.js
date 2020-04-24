import { createSelector } from 'reselect';
import potentialMoves from './potential_moves';
import moves from './moves';

export default createSelector(
  potentialMoves,
  moves,
  (potential, actual) =>
    Array.from(potential, (p, i) => p - actual[i].length)
);
