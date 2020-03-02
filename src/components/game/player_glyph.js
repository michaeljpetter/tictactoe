import React from 'react';
import { createUseStyles } from 'react-jss';

const glyphs = ['X', 'O', '▲', '◉'];

const useStyles = createUseStyles({
  glyph: {
    display: 'inline-block',
    minWidth: 20,
    textAlign: 'center'
  }
});

const PlayerGlyph = ({
  player
}) => {
  const c = useStyles();

  return (
    <div className={c.glyph}>{glyphs[player - 1]}</div>
  );
};

export default PlayerGlyph;
