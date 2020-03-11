import { createReducer } from '#/ext/redux';

export default createReducer(2, {
  'CHANGE_PLAYERS': (_, { payload }) => payload
});
