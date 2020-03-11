import React, { useState, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { LockIcon, UnlockIcon } from '#/res/icons';
import LockedPicker from './locked_picker';
import UnlockedPicker from './unlocked_picker';
import { Button } from '#/primitives';

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

const DimPicker = ({
  className
}) => {
  const c = useStyles();
  const [locked, setLocked] = useState(true);

  const toggleLocked = useCallback(() => setLocked(x => !x), [setLocked]);

  const [Icon, Picker] = locked
    ? [LockIcon, LockedPicker]
    : [UnlockIcon, UnlockedPicker];

  return (
    <>
      <Button className={c.lock} onClick={toggleLocked}>
        <Icon className={c.icon} />
      </Button>
      <Picker className={className} />
    </>
  );
};

export default DimPicker;
