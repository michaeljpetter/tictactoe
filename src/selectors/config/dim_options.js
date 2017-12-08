import { createSelector } from 'reselect';
import '../../ext/ruby';

export default createSelector(
  () => ({ dimOptions: [...(3).upto(5)] })
);
