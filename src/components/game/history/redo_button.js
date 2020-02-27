import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '@ext/redux';
import { canRedo } from '@selectors';
import { redo } from '@actions';
import { RedoIcon } from '@images';

const RedoButton = () => (
  <button disabled={!useSelector(canRedo)}
          onClick={useAction(redo)}>
    <RedoIcon />
  </button>
);

export default RedoButton;
