import { createSelector } from 'reselect';
import { get, lt } from 'lodash/fp';

export default createSelector(
  get('app.moveIndex'),
  get('app.moves.length'),
  lt
);
