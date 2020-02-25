import React from 'react';
import { connect } from 'react-redux';
import { canUndo } from '@selectors';
import { undo } from '@actions';
import { UndoIcon } from '@images';

const mapStateToProps = state => ({
  canUndo: canUndo(state)
});

const mapDispatchToProps = {
  undo
};

const UndoButton = ({
  canUndo,
  undo
}) => (
  <button disabled={!canUndo} onClick={undo}><UndoIcon /></button>
);

export default connect(mapStateToProps, mapDispatchToProps)(UndoButton);
