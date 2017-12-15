import React, { Fragment } from 'react';

const glyphs = ['X', 'O', '▲', '◉'];

const PlayerGlyph = ({
  player
}) => (
  <Fragment>
    {glyphs[player - 1]}
  </Fragment>
);

export default PlayerGlyph;
