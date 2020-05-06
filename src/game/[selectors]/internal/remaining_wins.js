import { createSelector } from 'reselect';
import potentialWins from './potential_wins';
import playerSquares from './player_squares';
import remainingMoves from './remaining_moves';

export default createSelector(
  potentialWins,
  playerSquares,
  remainingMoves,
  (potential, playerSquares, moves) =>
    potential.reduce(
      (acc, line) => {
        let player, required = 0;

        for(let i = 0; i < line.length; ++i) {
          const p = playerSquares[line[i]];
          if(!p) ++required;
          else if(!player) player = p;
          else if(p !== player) return acc;
        }

        if(!required) return acc;

        if(!player)
          moves.forEach((available, i) => {
            if(required <= available)
              acc[i].push(line);
          });
        else if(required <= moves[player - 1])
          acc[player - 1].push(line);

        return acc;
      },
      Array.from({ length: moves.length }, () => [])
    )
);
