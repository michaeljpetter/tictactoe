import { createSelector } from 'reselect';

export default createSelector(
  state => state.moves,
  state => state.moveIndex,
  (moves, moveIndex) => moveIndex < moves.length
);
