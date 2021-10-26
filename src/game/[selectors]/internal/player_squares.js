import { createSelector } from 'reselect';
import { dim } from '#/config/[selectors]';
import movesPerPlayer from './moves_per_player';

export default createSelector(
  dim,
  movesPerPlayer,
  ([width, height], movesPerPlayer) =>
    movesPerPlayer.reduce(
      (acc, moves, i) => (moves.forEach(move => acc[move] = i + 1), acc),
      Array.from({ length: width * height })
    )
);
