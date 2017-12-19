import { createSelector } from 'reselect';
import getPlayer from './get_player';

export default createSelector(
  getPlayer,
  state => state.moveIndex,
  (getPlayer, moveIndex) => getPlayer(moveIndex)
);
