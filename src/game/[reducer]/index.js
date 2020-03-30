import { compose, combineReducers } from 'redux';
import { withReset } from '#/ext/redux';
import moves from './moves';

export default compose(
  withReset('CHANGE_DIM', 'CHANGE_TO_WIN', 'CHANGE_PLAYERS'),
  combineReducers
)({
  moves
});
