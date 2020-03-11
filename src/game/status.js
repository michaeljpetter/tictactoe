import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { status } from './[selectors]';
import { MixedText } from '#/primitives';
import Player from './player';

const useStyles = createUseStyles({
  status: {
    lineHeight: '2rem'
  }
});

const Status = () => {
  const c = useStyles();

  return (
    <div className={c.status}>
      <MixedText player={Player}>{useSelector(status)}</MixedText>
    </div>
  );
};

export default Status;
