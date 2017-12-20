import { createSelector } from 'reselect';
import lines from './lines';
import squares from './squares';

export default createSelector(
  lines,
  squares,
  (lines, squares) =>
    lines.map(line => ({ line, sq: line.map(i => squares[i]) }))
         .filter(({ sq }) => sq[0] && sq.every(s => s === sq[0]))
         .map(({ line }) => line)
);
