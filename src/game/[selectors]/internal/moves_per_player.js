import { createSelector } from 'reselect';
import { players } from '#/config/[selectors]';
import moves from './moves';

export default createSelector(
  players,
  moves,
  (players, moves) =>
    moves.reduce(
      (acc, move, i) => (acc[i % players].push(move), acc),
      Array.from({ length: players }, () => [])
    )
);
