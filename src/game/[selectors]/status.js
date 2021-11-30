import { createSelector } from 'reselect';
import { winner } from './internal';
import currentPlayer from './current_player';

export default createSelector(
  winner,
  currentPlayer,
  (winner, player) =>
    winner != null ? [{ player: winner }, ' wins!'] :
    player != null ? ["It's your turn, ", { player }] :
    ["It's a draw..."]
);
