import { createSelector } from 'reselect';
import wins from './wins';
import prevPlayer from './prev_player';

export default createSelector(
  wins,
  prevPlayer,
  (wins, prevPlayer) => wins.length ? prevPlayer : null
);
