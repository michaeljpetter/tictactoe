import { createSelector } from 'reselect';
import potentialMoveCountPerPlayer from './potential_move_count_per_player';
import movesPerPlayer from './moves_per_player';

export default createSelector(
  potentialMoveCountPerPlayer,
  movesPerPlayer,
  (potential, actual) =>
    Array.from(potential, (p, i) => p - actual[i].length)
);
