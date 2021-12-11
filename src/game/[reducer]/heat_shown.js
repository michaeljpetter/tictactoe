import { createReducer } from '#/ext/redux';

export default createReducer(false, {
  'SHOW_HEAT': (_, { payload }) => payload
});
