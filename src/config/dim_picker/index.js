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
import classNames from 'classnames';

const useStyles = createUseMultiStyles([
  {
    dimPicker: {
      display: 'flex',
      alignItems: 'center'
    },
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
  className
}) => {
  const [Icon, Picker, lockAction] = useSelector(dimLocked)
    ? [LockIcon, LockedPicker, unlockDim]
    : [UnlockIcon, UnlockedPicker, lockDim];

  const c = useStyles();

  return (
    <div className={classNames(c.dimPicker, className)}>
      <Button className={c.lockButton} onClick={useAction(lockAction)}>
        <Icon className={c.lockIcon} />
      </Button>
      <Picker />
    </div>
  );
};

export default DimPicker;
