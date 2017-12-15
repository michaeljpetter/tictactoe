import { createSelector } from 'reselect';

export default createSelector(
  state => state.moves,
  state => state.activeMoveIndex,
  (moves, activeMoveIndex) => moves[activeMoveIndex]
);
