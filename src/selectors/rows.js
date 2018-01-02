import { createSelector } from 'reselect';
import { chain } from 'lodash';

export default createSelector(
  state => state.width,
  state => state.height,
  (width, height) => chain(width * height).range().chunk(width).value()
);
