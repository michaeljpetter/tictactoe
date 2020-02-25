import React from 'react';
import { connect } from 'react-redux';
import { canUndo } from '@selectors';
import { undoAll } from '@actions';
import { UndoAllIcon } from '@images';

const mapStateToProps = state => ({
  canUndo: canUndo(state)
});

const mapDispatchToProps = {
  undoAll
};

const UndoAllButton = ({
  canUndo,
  undoAll
}) => (
  <button disabled={!canUndo} onClick={undoAll}><UndoAllIcon /></button>
);

export default connect(mapStateToProps, mapDispatchToProps)(UndoAllButton);
