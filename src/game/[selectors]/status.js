import { createSelector } from 'reselect';
import { gameOver, getPlayer, playerSquares, winLines } from './internal';
import { get } from 'lodash/fp';

const _winner = createSelector(
  winLines,
  playerSquares,
  (winLines, playerSquares) =>
    winLines.length ? playerSquares[winLines[0][0]] : undefined
);

const _player = createSelector(
  gameOver,
  getPlayer,
  get('game.moves.prev.length'),
  (gameOver, getPlayer, moveCount) =>
    gameOver ? undefined : getPlayer(moveCount)
);

export default createSelector(
  _winner,
  gameOver,
  _player,
  (winner, gameOver, player) =>
    winner ? [{ player: winner }, ' wins!'] :
    gameOver ? ["It's a draw..."] :
    ["It's your turn, ", { player }]
);
