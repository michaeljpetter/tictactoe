import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '@ext/redux';
import { canUndo } from '@selectors';
import { undoAll } from '@actions';
import { UndoAllIcon } from '@images';

const UndoAllButton = () => (
  <button disabled={!useSelector(canUndo)}
          onClick={useAction(undoAll)}>
    <UndoAllIcon />
  </button>
);

export default UndoAllButton;
