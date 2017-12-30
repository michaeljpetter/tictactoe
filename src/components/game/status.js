import React from 'react';
import { connect } from 'react-redux';
import { status } from '@selectors';
import MixedText from './mixed_text';

const mapStateToProps = state => ({
  status: status(state)
});

const Status = ({
  status
}) => (
  <div className="status">
    <MixedText text={status} />
  </div>
);

export default connect(mapStateToProps)(Status);
