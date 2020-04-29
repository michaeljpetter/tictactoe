import { createSelector } from 'reselect';
import { players } from '#/config/[selectors]';

export default createSelector(
  ({ game }) => game.moves.prev.length,
  players,
  (moveCount, players) => moveCount % players + 1
);
