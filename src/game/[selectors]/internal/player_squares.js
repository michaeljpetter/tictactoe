import { createSelector } from 'reselect';
import { dim } from '#/config/[selectors]';
import moves from './moves';
import getPlayer from './get_player';

export default createSelector(
  dim,
  moves,
  getPlayer,
  ([width, height], moves, getPlayer) =>
    moves.reduce(
      (acc, move, i) => (acc[move] = getPlayer(i), acc),
      Array.from({ length: width * height })
    )
);
