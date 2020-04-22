import { createSelector } from 'reselect';
import dim from './dim';
import { range } from 'lodash/fp';

export default createSelector(
  dim,
  dim => range(3, Math.min(...dim) + 1)
);
