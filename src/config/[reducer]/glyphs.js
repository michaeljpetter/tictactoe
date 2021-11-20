import { createReducer } from '#/ext/redux';
import { set } from 'lodash/fp';

export default createReducer(['X', 'O', '▲', '◉'], {
  'CHANGE_GLYPH': (state, { payload: { player, glyph } }) => set(player, glyph, state)
});
