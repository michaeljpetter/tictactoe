import { compose } from 'redux';
import { createReducer, withHistory, withReset } from '#/ext/redux';

export default compose(
  withReset('CHANGE_DIM', 'CHANGE_TO_WIN', 'CHANGE_PLAYERS'),
  withHistory({
    first: 'UNDO_ALL',
    prev: 'UNDO',
    next: 'REDO',
    last: 'REDO_ALL'
  }),
  createReducer
)(null, {
  'MAKE_MOVE': (_, { payload }) => payload
});
