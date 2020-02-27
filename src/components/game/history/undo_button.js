import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '@ext/redux';
import { canUndo } from '@selectors';
import { undo } from '@actions';
import { UndoIcon } from '@images';

const UndoButton = () => (
  <button disabled={!useSelector(canUndo)}
          onClick={useAction(undo)}>
    <UndoIcon />
  </button>
);

export default UndoButton;
