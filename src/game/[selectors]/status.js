import { createSelector } from 'reselect';
import { currentPlayer, gameOver, winner } from './internal';

export default createSelector(
  winner,
  gameOver,
  currentPlayer,
  (winner, gameOver, player) =>
    winner ? [{ player: winner }, ' wins!'] :
    gameOver ? ["It's a draw..."] :
    ["It's your turn, ", { player }]
);
