import { createSelector } from 'reselect';
import { range } from 'lodash';

export default createSelector(
  state => state.dim,
  dim => range(3, dim + 1)
);
