import { combineReducers } from 'redux';
import dim from './dim';
import dimLocked from './dim_locked';
import players from './players';
import toWin from './to_win';

export default combineReducers({
  dim,
  dimLocked,
  players,
  toWin
});
