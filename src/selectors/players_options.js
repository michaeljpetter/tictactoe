import { createSelector } from 'reselect';
import '../ext/ruby';

export default createSelector(
  () => [...(2).upto(4)]
);
