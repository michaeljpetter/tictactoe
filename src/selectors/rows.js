import { createSelector } from 'reselect';
import dim from './dim';
import { range, chunk } from 'lodash/fp';

export default createSelector(
  dim,
  ([width, height]) => chunk(width, range(0, width * height))
);
