import { createSelector } from 'reselect';
import { chain } from 'lodash';

export default createSelector(
  state => state.dim,
  dim => chain(dim * dim).range().chunk(dim).value()
);
