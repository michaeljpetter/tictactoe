import { createSelector } from 'reselect';
import winner from './winner';
import squares from './squares';

export default createSelector(
  winner,
  squares,
  (winner, squares) => index => !winner && !squares[index] 
);
