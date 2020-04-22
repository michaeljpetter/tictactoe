import { createSelector } from 'reselect';
import dim from './dim';
import toWin from './to_win';
import { range } from 'lodash/fp';

export default createSelector(
  dim,
  toWin,
  ([width, height], toWin) => range(2, Math.min(4, width * height / toWin) + 1)
);
