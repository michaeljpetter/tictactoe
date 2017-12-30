import { createSelector } from 'reselect';
import winner from './winner';
import getPlayer from './get_player';

export default createSelector(
  winner,
  getPlayer,
  state => state.moveIndex,
  (winner, getPlayer, moveIndex) =>
    winner
      ? [{ player: winner }, ' wins!']
      : ["It's your turn, ", { player: getPlayer(moveIndex) }]
);
