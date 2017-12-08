import { createSelector } from 'reselect';
import '../../ext/ruby';

export default createSelector(
  () => ({ playersOptions: [...(2).upto(4)] })
);
