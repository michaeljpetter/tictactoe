import { createSelector } from 'reselect';
import getPlayer from './get_player';

export default createSelector(
  state => state.dim,
  state => state.moves,
  state => state.moveIndex,
  getPlayer,
  (dim, moves, moveIndex, getPlayer) =>
    moves.slice(0, moveIndex).reduce(
      (sq, m, i) => ((sq[m] = getPlayer(i), sq)),
      Array(dim * dim)
    )
);
