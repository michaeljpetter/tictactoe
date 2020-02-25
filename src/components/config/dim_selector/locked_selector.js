import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { dimOptions } from '@selectors';
import { changeDim } from '@actions';
import Selector from '../../primitives/selector';

const mapStateToProps = state => ({
  width: state.width,
  options: dimOptions(state)
});

const mapDispatchToProps = {
  changeDim
};

const LockedSelector = ({
  width,
  options,
  changeDim
}) => {
  useEffect(() => changeDim(width), []);

  return (
    <Selector value={width} options={options}
              optionText={dim => `${dim} x ${dim}`}
              onChange={changeDim} />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LockedSelector);
