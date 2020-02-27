import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '@ext/redux';
import { canRedo } from '@selectors';
import { redoAll } from '@actions';
import { RedoAllIcon } from '@images';

const RedoAllButton = () => (
  <button disabled={!useSelector(canRedo)}
          onClick={useAction(redoAll)}>
    <RedoAllIcon />
  </button>
);

export default RedoAllButton;
