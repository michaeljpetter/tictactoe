import { createSelector } from 'reselect';
import { get, lt } from 'lodash/fp';

export default createSelector(
  get('game.moves.next.length'),
  lt(0)
);
