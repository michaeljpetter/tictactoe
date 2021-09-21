import React from 'react';
import { createUseMultiStyles } from '#/ext/jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { dimLocked } from '../[selectors]';
import { lockDim, unlockDim } from '../[actions]';
import { LockIcon, UnlockIcon } from '#/res/icons';
import LockedPicker from './locked_picker';
import UnlockedPicker from './unlocked_picker';
import { Button } from '#/primitives';

const useStyles = createUseMultiStyles([
  {
    lock: {
      width: 20,
      marginRight: 1,
      padding: 0,
      border: 'none',
      verticalAlign: 'middle'
    }
  },
  ({ header }) => ({
    icon: {
      fill: header.color
    }
  })
]);

const DimPicker = ({
  className
}) => {
  const c = useStyles();

  const [Icon, Picker, onClick] = useSelector(dimLocked)
    ? [LockIcon, LockedPicker, unlockDim]
    : [UnlockIcon, UnlockedPicker, lockDim];

  return (
    <>
      <Button className={c.lock} onClick={useAction(onClick)}>
        <Icon className={c.icon} />
      </Button>
      <Picker className={className} />
    </>
  );
};

export default DimPicker;
