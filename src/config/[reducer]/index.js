import { combineReducers } from 'redux';
import dim from './dim';
import players from './players';
import toWin from './to_win';

export default combineReducers({
  dim,
  players,
  toWin
});
