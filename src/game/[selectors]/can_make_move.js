import { createSelector } from 'reselect';
import gameOver from './game_over';
import squares from './squares';
import { F, negate, nth, __ } from 'lodash/fp';

export default createSelector(
  gameOver,
  squares,
  (gameOver, squares) =>
    gameOver ? F : negate(nth(__, squares))
);
