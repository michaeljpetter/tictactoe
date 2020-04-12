import { createSelector } from 'reselect';
import { winLines } from './internal';
import { flatten } from 'lodash/fp';

const _winSquares = createSelector(
  winLines,
  winLines => new Set(flatten(winLines))
);

export default createSelector(
  _winSquares,
  winSquares => index => winSquares.has(index)
);
