import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { glyphs } from '#/config/[selectors]';

const useStyles = createUseStyles({
  player: {
    fontFamily: '"Century Gothic", Futura, sans-serif',
    display: 'inline-block',
    minWidth: 20,
    textAlign: 'center',
    lineHeight: 'initial'
  }
});

const Player = ({
  value
}) => {
  const c = useStyles();

  return (
    <div className={c.player}>{useSelector(glyphs)[value]}</div>
  );
};

export default Player;
