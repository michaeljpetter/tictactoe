import React from 'react';

const glyphs = ['X', 'O', '▲', '◉'];

const PlayerGlyph = ({
  player
}) => (
  <div className="glyph">{glyphs[player - 1]}</div>
);

export default PlayerGlyph;
