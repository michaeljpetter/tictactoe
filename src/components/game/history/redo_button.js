import React from 'react';
import { connect } from 'react-redux';
import { canRedo } from '@selectors';
import { redo } from '@actions';
import Icon from '@images/redo_icon';

const mapStateToProps = state => ({
  canRedo: canRedo(state)
});

const mapDispatchToProps = {
  redo
};

const RedoButton = ({
  canRedo, redo
}) => (
  <button disabled={!canRedo} onClick={redo}><Icon /></button>
);

export default connect(mapStateToProps, mapDispatchToProps)(RedoButton);
