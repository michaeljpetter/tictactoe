import { createSelector } from 'reselect';
import dim from './dim';
import toWin from './to_win';

export default createSelector(
  dim,
  toWin,
  ([width, height], toWin) => [2, Math.min(4, width * height / toWin)]
);
