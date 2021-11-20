export default (player, glyph) =>
  ({ type: 'CHANGE_GLYPH', payload: { player, glyph } });
