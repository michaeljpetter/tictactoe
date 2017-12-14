import { createSelector } from 'reselect';
import '../ext/ruby';

export default createSelector(
  state => state.dim,
  dim => [...(3).upto(dim)]
);
