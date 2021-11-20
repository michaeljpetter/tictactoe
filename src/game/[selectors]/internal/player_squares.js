import { createSelector } from 'reselect';
import { dim } from '#/config/[selectors]';
import movesPerPlayer from './moves_per_player';

export default createSelector(
  dim,
  movesPerPlayer,
  ([width, height], movesPerPlayer) =>
    movesPerPlayer.reduce(
      (acc, moves, player) => (moves.forEach(move => acc[move] = player), acc),
      Array(width * height).fill(null)
    )
);
