import React from 'react';
import { createUseMultiStyles } from '#/ext/jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { dimLocked } from '../[selectors]';
import { lockDim, unlockDim } from '../[actions]';
import { LockIcon, UnlockIcon } from '#/res/icons';
import LockedPicker from './locked_picker';
import UnlockedPicker from './unlocked_picker';
import { Button } from '#/ext/react';

const useStyles = createUseMultiStyles([
  {
    lockButton: {
      width: 20,
      marginRight: 1,
      padding: 0,
      border: 'none',
      display: 'inline-flex'
    }
  },
  ({ config }) => ({
    lockIcon: {
      fill: config.color
    }
  })
]);

const DimPicker = ({
  ...props
}) => {
  const [Icon, Picker, onClick] = useSelector(dimLocked)
    ? [LockIcon, LockedPicker, unlockDim]
    : [UnlockIcon, UnlockedPicker, lockDim];

  const c = useStyles();

  return (
    <>
      <Button className={c.lockButton} onClick={useAction(onClick)}>
        <Icon className={c.lockIcon} />
      </Button>
      <Picker {...props} />
    </>
  );
};

export default DimPicker;
