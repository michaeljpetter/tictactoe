import { createSelector } from 'reselect';
import dim from './dim';
import { add, flow, min, range } from 'lodash/fp';

export default createSelector(
  dim,
  flow(min, add(1), range(3))
);
