import React from 'react';
import { connect } from 'react-redux';
import { canRedo } from '@selectors';
import { redo } from '@actions';
import { RedoIcon } from '@images';

const mapStateToProps = state => ({
  canRedo: canRedo(state)
});

const mapDispatchToProps = {
  redo
};

const RedoButton = ({
  canRedo,
  redo
}) => (
  <button disabled={!canRedo} onClick={redo}><RedoIcon /></button>
);

export default connect(mapStateToProps, mapDispatchToProps)(RedoButton);
