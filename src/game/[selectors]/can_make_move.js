import { createSelector } from 'reselect';
import { gameOver, playerSquares } from './internal';
import { F, __, negate, nth } from 'lodash/fp';

export default createSelector(
  gameOver,
  playerSquares,
  (gameOver, playerSquares) =>
    gameOver ? F : negate(nth(__, playerSquares))
);
