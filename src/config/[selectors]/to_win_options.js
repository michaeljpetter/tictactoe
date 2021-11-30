import { createSelector } from 'reselect';
import toWinRange from './to_win_range';
import { spread } from 'lodash/fp';
import { seq } from '#/ext/fp';

export default createSelector(
  toWinRange,
  spread(seq)
);
