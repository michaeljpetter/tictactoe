import { createSelector } from 'reselect';
import { get, concat } from 'lodash/fp';

export default createSelector(
  get('width'),
  get('height'),
  concat
);
