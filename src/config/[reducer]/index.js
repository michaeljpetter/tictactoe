import { combineReducers, compose } from 'redux';
import { withReset } from '#/ext/redux';
import ai from './ai';
import dim from './dim';
import dimLocked from './dim_locked';
import glyphs from './glyphs';
import players from './players';
import toWin from './to_win';

export default compose(
  withReset('RESET'),
  combineReducers
)({
  ai,
  dim,
  dimLocked,
  glyphs,
  players,
  toWin
});
