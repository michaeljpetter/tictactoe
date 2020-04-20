import { createSelector } from 'reselect';
import moves from './moves';
import getPlayer from './get_player';

export default createSelector(
  moves,
  getPlayer,
  (moves, getPlayer) => getPlayer(moves.length)
);
