import { createSelector } from 'reselect';
import players from './players';

export default createSelector(
  players,
  players => moveIndex => moveIndex % players + 1
);
