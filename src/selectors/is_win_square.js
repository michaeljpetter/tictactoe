import { createSelector } from 'reselect';
import winLines from './win_lines';
import { flatten } from 'lodash/fp';

const winSquares = createSelector(
  winLines,
  winLines => new Set(flatten(winLines))
);

export default createSelector(
  winSquares,
  winSquares => index => winSquares.has(index)
);
