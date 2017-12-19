import { createSelector } from 'reselect';
import winLines from './win_lines';
import squares from './squares';

export default createSelector(
  winLines,
  squares,
  (winLines, squares) =>
    winLines.length ? squares[winLines[0][0]] : undefined
);
