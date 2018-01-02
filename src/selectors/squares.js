import { createSelector } from 'reselect';
import getPlayer from './get_player';

export default createSelector(
  state => state.width,
  state => state.height,
  state => state.moves,
  state => state.moveIndex,
  getPlayer,
  (width, height, moves, moveIndex, getPlayer) =>
    moves.slice(0, moveIndex).reduce(
      (sq, m, i) => ((sq[m] = getPlayer(i), sq)),
      Array(width * height)
    )
);
