import { createSelector } from 'reselect';
import lines from './lines';
import playerSquares from './player_squares';
import { get } from 'lodash/fp';

export default createSelector(
  lines,
  playerSquares,
  (lines, playerSquares) =>
    lines.map(line => ({ line, players: line.map(i => playerSquares[i]) }))
         .filter(({ players }) => players[0] && players.every(p => p === players[0]))
         .map(get('line'))
);
