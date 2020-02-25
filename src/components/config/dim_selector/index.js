import React, { useState } from 'react';
import { LockIcon, UnlockIcon } from '@images';
import LockedSelector from './locked_selector';
import UnlockedSelector from './unlocked_selector';

const DimSelector = () => {
  const [locked, setLocked] = useState(true);

  const toggleLock = () => setLocked(x => !x);

  return (
    <>
      <button className="lock" onClick={toggleLock}>
        {locked ? <LockIcon /> : <UnlockIcon />}
      </button>
      {locked ? <LockedSelector /> : <UnlockedSelector />}
    </>
  );
};

export default DimSelector;
