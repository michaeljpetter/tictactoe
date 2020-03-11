import React from 'react';
import { createUseStyles } from 'react-jss';

const glyphs = ['X', 'O', '▲', '◉'];

const useStyles = createUseStyles({
  player: {
    fontFamily: '"Century Gothic", Futura, sans-serif',
    display: 'inline-block',
    minWidth: 20,
    textAlign: 'center'
  }
});

const Player = ({
  value
}) => {
  const c = useStyles();

  return (
    <div className={c.player}>{glyphs[value - 1]}</div>
  );
};

export default Player;
