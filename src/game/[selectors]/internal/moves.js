import { createSelector } from 'reselect';
import { players } from '#/config/[selectors]';

export default createSelector(
  ({ game }) => game.moves,
  players,
  ({ prev, current }, players) =>
    [...prev, current].slice(1).reduce(
      (acc, move, i) => (acc[i % players].push(move), acc),
      Array.from({ length: players }, () => [])
    )
);
