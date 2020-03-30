import { createReducer } from '#/ext/redux';

export default createReducer(true, {
  'LOCK_DIM': () => true,
  'UNLOCK_DIM': () => false,
});
