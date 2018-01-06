import { createSelector } from 'reselect';
import gameOver from './game_over';
import squares from './squares';

export default createSelector(
  gameOver,
  squares,
  (gameOver, squares) =>
    gameOver ? () => false : index => !squares[index]
);
