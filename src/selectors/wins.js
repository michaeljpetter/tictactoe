import { createSelector } from 'reselect';
import lines from './lines';

export default createSelector(
  state => state.moves,
  state => state.moveIndex,
  lines,
  (moves, moveIndex, lines) => {
    const squares = moves[moveIndex].squares;
    return lines.reduce((wins, line) => {
      const uniq = new Set(line.map(i => squares[i]))
      const winner = uniq.size === 1 && uniq.values().next().value;
      winner && wins.push({ player: winner, line });
      return wins;
    }, []);
  }
);

