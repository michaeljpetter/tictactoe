import { createSelector } from 'reselect';
import potentialWins from './potential_wins';
import playerSquares from './player_squares';
import remainingMoves from './remaining_moves';

export default createSelector(
  potentialWins,
  playerSquares,
  remainingMoves,
  (potential, playerSquares, moves) => {
    const maxMoves = Math.max(...moves);

    return potential.filter(line => {
      let required = 0, available = maxMoves;

      for(let p0, i = 0; i < line.length; ++i) {
        const p = playerSquares[line[i]];
        if(!p) ++required;
        else if(!p0) { p0 = p; available = moves[p - 1]; }
        else if(p !== p0) return false;
      }

      return 0 < required && required <= available;
    });
  }
);
