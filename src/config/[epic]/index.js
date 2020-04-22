import { combineEpics } from 'redux-observable';
import clampPlayers from './clamp_players';
import clampToWin from './clamp_to_win';
import lockDim from './lock_dim';

export default combineEpics(
  clampPlayers,
  clampToWin,
  lockDim
);
