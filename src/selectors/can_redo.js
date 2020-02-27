import { createSelector } from 'reselect';
import { get, lt } from 'lodash/fp';

export default createSelector(
  get('moveIndex'),
  get('moves.length'),
  lt
);
