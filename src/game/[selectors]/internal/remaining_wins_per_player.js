import { createSelector } from 'reselect';
import potentialWins from './potential_wins';
import playerSquares from './player_squares';
import remainingMoveCountPerPlayer from './remaining_move_count_per_player';

export default createSelector(
  potentialWins,
  playerSquares,
  remainingMoveCountPerPlayer,
  (potential, playerSquares, moveCounts) =>
    potential.reduce(
      (acc, line) => {
        let player, required = 0;

        for(let i = 0; i < line.length; ++i) {
          const p = playerSquares[line[i]];
          if(p == null) ++required;
          else if(player == null) player = p;
          else if(p !== player) return acc;
        }

        if(!required) return acc;

        if(player == null)
          moveCounts.forEach((remaining, i) => {
            if(required <= remaining)
              acc[i].push(line);
          });
        else if(required <= moveCounts[player])
          acc[player].push(line);

        return acc;
      },
      Array.from({ length: moveCounts.length }, () => [])
    )
);
