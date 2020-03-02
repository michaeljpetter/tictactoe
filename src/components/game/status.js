import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { status } from '@selectors';
import MixedText from './mixed_text';

const useStyles = createUseStyles({
  status: {
    lineHeight: '2rem'
  }
});

const Status = () => {
  const c = useStyles();

  return (
    <div className={c.status}>
      <MixedText parts={useSelector(status)} />
    </div>
  );
};

export default Status;
