import { createSelector } from 'reselect';
import playersRange from './players_range';
import { spread } from 'lodash/fp';
import { seq } from '#/ext/fp';

export default createSelector(
  playersRange,
  spread(seq)
);
