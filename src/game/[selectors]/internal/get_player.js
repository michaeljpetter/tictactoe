import { createSelector } from 'reselect';
import { players } from '#/config/[selectors]';

export default createSelector(
  players,
  players => moveIndex => moveIndex % players + 1
);
