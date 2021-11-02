import { combineReducers, compose } from 'redux';
import { withReset } from '#/ext/redux';
import dim from './dim';
import dimLocked from './dim_locked';
import players from './players';
import toWin from './to_win';

export default compose(
  withReset('RESET'),
  combineReducers
)({
  dim,
  dimLocked,
  players,
  toWin
});
