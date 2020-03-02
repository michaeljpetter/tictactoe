import React, { useState, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { LockIcon, UnlockIcon } from '@images';
import LockedSelector from './locked_selector';
import UnlockedSelector from './unlocked_selector';
import { Button } from '@primitives';

const useStyles = createUseStyles(theme => ({
  lock: {
    width: 20,
    marginRight: 1,
    padding: 0,
    border: 'none',
    verticalAlign: 'middle'
  },
  icon: {
    fill: theme['header.color']
  }
}));

const DimSelector = ({
  className
}) => {
  const c = useStyles();
  const [locked, setLocked] = useState(true);

  const toggleLocked = useCallback(() => setLocked(x => !x), [setLocked]);

  const [Icon, Selector] = locked
    ? [LockIcon, LockedSelector]
    : [UnlockIcon, UnlockedSelector];

  return (
    <>
      <Button className={c.lock} onClick={toggleLocked}>
        <Icon className={c.icon} />
      </Button>
      <Selector className={className} />
    </>
  );
};

export default DimSelector;
