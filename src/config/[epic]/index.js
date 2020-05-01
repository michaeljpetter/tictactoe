import { combineEpics } from 'redux-observable';
import lockDim from './lock_dim';
import clampToWin from './clamp_to_win';
import clampPlayers from './clamp_players';

export default combineEpics(
  lockDim,
  clampToWin,
  clampPlayers
);
