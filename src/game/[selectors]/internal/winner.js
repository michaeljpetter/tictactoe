import { createSelector } from 'reselect';
import wins from './wins';
import lastPlayer from './last_player';

export default createSelector(
  wins,
  lastPlayer,
  (wins, lastPlayer) => wins.length ? lastPlayer : null
);
