import { createSelector } from 'reselect';

export default createSelector(
  state => state.players,
  players => moveIndex => moveIndex % players + 1
);
