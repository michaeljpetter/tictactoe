import { createSelector } from 'reselect';
import winLines from './win_lines';
import squares from './squares';
import gameOver from './game_over';
import getPlayer from './get_player';
import { get } from 'lodash/fp';

const winner = createSelector(
  winLines,
  squares,
  (winLines, squares) =>
    winLines.length ? squares[winLines[0][0]] : undefined
);

const player = createSelector(
  gameOver,
  getPlayer,
  get('game.moves.prev.length'),
  (gameOver, getPlayer, moveCount) =>
    gameOver ? undefined : getPlayer(moveCount)
);

export default createSelector(
  winner,
  gameOver,
  player,
  (winner, gameOver, player) =>
    winner ? [{ player: winner }, ' wins!'] :
    gameOver ? ["It's a draw..."] :
    ["It's your turn, ", { player }]
);
