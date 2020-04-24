import { createSelector } from 'reselect';
import { dim } from '#/config/[selectors]';
import moves from './moves';

export default createSelector(
  dim,
  moves,
  ([width, height], moves) =>
    moves.reduce(
      (acc, moves, i) => (moves.forEach(move => acc[move] = i + 1), acc),
      Array.from({ length: width * height })
    )
);
