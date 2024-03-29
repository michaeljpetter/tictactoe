import { combineReducers, compose } from 'redux';
import { withReset } from '#/ext/redux';
import aiDelay from './ai_delay';
import heatShown from './heat_shown';
import moves from './moves';

export default compose(
  withReset('RESET'),
  combineReducers
)({
  aiDelay,
  heatShown,
  moves
});
