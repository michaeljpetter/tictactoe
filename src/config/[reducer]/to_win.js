import { createReducer } from '#/ext/redux';

export default createReducer(3, {
  'CHANGE_TO_WIN': (_, { payload }) => payload,

  'CHANGE_DIM': (state, { payload }) => Math.min(state, ...payload)
});
