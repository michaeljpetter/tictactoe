import { createSelector } from 'reselect';
import { players } from '#/config/[selectors]';
import { gameOver } from './internal';

export default createSelector(
  gameOver,
  ({ game }) => game.moves.prev.length,
  players,
  (gameOver, moveCount, players) => gameOver ? null : moveCount % players
);
