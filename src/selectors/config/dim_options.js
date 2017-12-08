import { createSelector } from 'reselect';
import '../../ext/ruby';

export default createSelector(
  () => [...(3).upto(5)]
);
