import { compose } from 'redux';
import { createReducer, withHistory } from '#/ext/redux';

export default compose(
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
