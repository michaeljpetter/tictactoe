import { createSelector } from 'reselect';
import { winLines } from './internal';

const _winSquares = createSelector(
  winLines,
  winLines => new Set(winLines.flat())
);

export default createSelector(
  _winSquares,
  winSquares => index => winSquares.has(index)
);
