import { createSelector } from 'reselect';
import wins from './wins';
import remainingWinsPerPlayer from './remaining_wins_per_player';

export default createSelector(
  wins,
  remainingWinsPerPlayer,
  (wins, remaining) =>
    !!wins.length || !remaining.some(r => r.length)
);
