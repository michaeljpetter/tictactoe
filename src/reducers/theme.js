import { createReducer } from '@ext/redux';

export default createReducer('solarized', {
  'CHANGE_THEME': (_, { payload }) => payload
});
