import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { status } from './[selectors]';
import { MixedText } from '#/ext/react';
import Player from './player';
import classNames from 'classnames';

const useStyles = createUseStyles({
  status: {
    lineHeight: '2rem'
  }
});

const Status = ({
  className
}) => {
  const c = useStyles();

  return (
    <div className={classNames(c.status, className)}>
      <MixedText player={Player}>{useSelector(status)}</MixedText>
    </div>
  );
};

export default Status;
