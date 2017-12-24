import React from 'react';
import { connect } from 'react-redux';
import { canRedo } from '@selectors';
import { redoAll } from '@actions';
import Icon from '@images/redo_all_icon';

const mapStateToProps = state => ({
  canRedo: canRedo(state)
});

const mapDispatchToProps = {
  redoAll
};

const RedoAllButton = ({
  canRedo, redoAll
}) => (
  <button disabled={!canRedo} onClick={redoAll}><Icon /></button>
);

export default connect(mapStateToProps, mapDispatchToProps)(RedoAllButton);
