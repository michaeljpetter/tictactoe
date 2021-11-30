import { createReducer } from '#/ext/redux';

export default createReducer(500, {
  'CHANGE_AI_DELAY': (_, { payload }) => payload
});
