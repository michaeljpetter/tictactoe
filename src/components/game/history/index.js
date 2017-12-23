import React from 'react';
import UndoButton from './undo_button';
import UndoAllButton from './undo_all_button';
import RedoButton from './redo_button';
import RedoAllButton from './redo_all_button';

const History = () => (
  <div className="history">
    <UndoAllButton />
    <UndoButton />
    <RedoButton />
    <RedoAllButton />
  </div>
);

export default History;
