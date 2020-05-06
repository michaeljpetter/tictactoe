import { createSelector } from 'reselect';
import { players } from '#/config/[selectors]';
import gameOver from './game_over';

export default createSelector(
  gameOver,
  ({ game }) => game.moves.prev.length,
  players,
  (gameOver, moveCount, players) => gameOver ? null : moveCount % players + 1
);
