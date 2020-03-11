import { createReducer } from '#/ext/redux';

export default createReducer([3, 3], {
  'CHANGE_DIM': (_, { payload }) => payload
});
