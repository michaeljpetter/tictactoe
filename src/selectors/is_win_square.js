import { createSelector } from 'reselect';
import winLines from './win_lines';

const winSquares = createSelector(
  winLines,
  winLines => new Set([].concat(...winLines))
);

export default createSelector(
  winSquares,
  winSquares => index => winSquares.has(index)
);
