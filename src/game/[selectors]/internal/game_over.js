import { createSelector } from 'reselect';
import wins from './wins';
import remainingWins from './remaining_wins';

export default createSelector(
  wins,
  remainingWins,
  (wins, remaining) =>
    !!wins.length || !remaining.length
);
