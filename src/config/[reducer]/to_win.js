import { createReducer } from '#/ext/redux';
import { min, concat } from 'lodash/fp';

export default createReducer(3, {
  'CHANGE_TO_WIN': (_, { payload }) => payload,

  'CHANGE_DIM': (state, { payload }) => min(concat(state, payload))
});
