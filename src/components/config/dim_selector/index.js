import React from 'react';
import { LockIcon, UnlockIcon } from '@images';
import LockedSelector from './locked_selector';
import UnlockedSelector from './unlocked_selector';

class DimSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locked: true };
  }

  toggleLock() {
    this.setState(({ locked }) => ({ locked: !locked }));
  }

  render() {
    const { locked } = this.state;
    return (
      <>
        <button className="lock" onClick={() => this.toggleLock()}>
          {locked ? <LockIcon /> : <UnlockIcon />}
        </button>
        {locked ? <LockedSelector /> : <UnlockedSelector />}
      </>
    );
  }
}

export default DimSelector;
