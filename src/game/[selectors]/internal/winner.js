import { createSelector } from 'reselect';
import winLines from './win_lines';
import lastPlayer from './last_player';

export default createSelector(
  winLines,
  lastPlayer,
  (winLines, lastPlayer) => winLines.length ? lastPlayer : null
);
