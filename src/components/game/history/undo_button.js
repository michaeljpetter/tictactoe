import React from 'react';
import { connect } from 'react-redux';
import { canUndo } from '@selectors';
import { undo } from '@actions';
import Icon from '@images/undo_icon';

const mapStateToProps = state => ({
  canUndo: canUndo(state)
});

const mapDispatchToProps = {
  undo
};

const UndoButton = ({
  canUndo, undo
}) => (
  <button disabled={!canUndo} onClick={undo}><Icon /></button>
);

export default connect(mapStateToProps, mapDispatchToProps)(UndoButton);
