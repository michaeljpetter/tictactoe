import { createSelector } from 'reselect';
import { currentPlayer, winner } from './internal';

export default createSelector(
  winner,
  currentPlayer,
  (winner, player) =>
    winner ? [{ player: winner }, ' wins!'] :
    player ? ["It's your turn, ", { player }] :
    ["It's a draw..."]
);
