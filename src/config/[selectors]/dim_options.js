import { createSelector } from 'reselect';
import { range } from 'lodash/fp';

export default createSelector(
  () => range(3, 6)
);
