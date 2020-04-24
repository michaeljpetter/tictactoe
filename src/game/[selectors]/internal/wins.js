import { createSelector } from 'reselect';
import potentialWins from './potential_wins';
import playerSquares from './player_squares';
import lastPlayer from './last_player';

export default createSelector(
  potentialWins,
  playerSquares,
  lastPlayer,
  (potential, playerSquares, lastPlayer) =>
    potential.filter(line => line.every(i => playerSquares[i] === lastPlayer))
);
