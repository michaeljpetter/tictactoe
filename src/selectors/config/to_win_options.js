import { createSelector } from 'reselect';
import '../../ext/ruby';

export default createSelector(
  state => state.config.dim,
  dim => ({ toWinOptions: [...(3).upto(dim)] })
);
