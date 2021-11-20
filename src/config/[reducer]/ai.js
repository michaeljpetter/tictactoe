import { createReducer } from '#/ext/redux';
import { set } from 'lodash/fp';

export default createReducer(Array(4).fill(false), {
  'CHANGE_AI': (state, { payload: { player, ai } }) => set(player, ai, state)
});
