import { createSelector } from 'reselect';
import { get, lt } from 'lodash/fp';

export default createSelector(
  get('game.moveIndex'),
  get('game.moves.length'),
  lt
);
