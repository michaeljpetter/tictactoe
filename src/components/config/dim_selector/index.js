import React, { Fragment } from 'react';
import LockIcon from '@images/lock_icon';
import UnlockIcon from '@images/unlock_icon';
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
      <Fragment>
        <button className="lock" onClick={() => this.toggleLock()}>
          {locked ? <LockIcon /> : <UnlockIcon />}
        </button>
        {locked ? <LockedSelector /> : <UnlockedSelector />}
      </Fragment>
    );
  }
}

export default DimSelector;
