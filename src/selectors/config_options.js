import { createSelector } from 'reselect';
import '../ext/ruby';

export default createSelector(
  state => state.config.dim,
  dim => ({
    dimOptions: [...(3).upto(5)],
    toWinOptions: [...(3).upto(dim)],
    playersOptions: [...(2).upto(4)]
  })
);
