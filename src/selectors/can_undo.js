import { createSelector } from 'reselect';

export default createSelector(
  state => state.moveIndex,
  moveIndex => 0 < moveIndex
);
