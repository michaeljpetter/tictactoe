import { createSelector } from 'reselect';
import { get, concat } from 'lodash/fp';

export default createSelector(
  get('app.width'),
  get('app.height'),
  concat
);
