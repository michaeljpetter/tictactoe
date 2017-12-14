import { createSelector } from 'reselect';
import { range } from 'lodash';

export default createSelector(
  () => range(2, 5)
);
