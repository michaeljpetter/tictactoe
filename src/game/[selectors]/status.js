import { createSelector } from 'reselect';
import { currentPlayer, winner } from './internal';

export default createSelector(
  winner,
  currentPlayer,
  (winner, player) =>
    winner != null ? [{ player: winner }, ' wins!'] :
    player != null ? ["It's your turn, ", { player }] :
    ["It's a draw..."]
);
