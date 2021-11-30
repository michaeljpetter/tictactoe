import { createSelector } from 'reselect';
import dimRange from './dim_range';
import { spread } from 'lodash/fp';
import { seq } from '#/ext/fp';

export default createSelector(
  dimRange,
  spread(seq)
);
