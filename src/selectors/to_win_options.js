import { createSelector } from 'reselect';
import { range } from 'lodash';

export default createSelector(
  state => state.width,
  state => state.height,
  (width, height) => range(3, Math.min(width, height) + 1)
);
