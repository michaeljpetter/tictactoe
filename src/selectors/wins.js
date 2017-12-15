import { createSelector } from 'reselect';
import lines from './lines';
import activeMove from './active_move';

export default createSelector(
  lines,
  activeMove,
  (lines, { squares }) =>
    lines.reduce((wins, line) => {
      const uniq = new Set(line.map(i => squares[i]))
      const winner = uniq.size === 1 && uniq.values().next().value;
      winner && wins.push({ player: winner, line });
      return wins;
    }, [])
);

