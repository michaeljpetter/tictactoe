import { createSelector } from 'reselect';
import lines from './lines';
import playerSquares from './player_squares';
import lastPlayer from './last_player';

export default createSelector(
  lines,
  playerSquares,
  lastPlayer,
  (lines, playerSquares, lastPlayer) =>
    lines.filter(line => line.every(i => playerSquares[i] === lastPlayer))
);
