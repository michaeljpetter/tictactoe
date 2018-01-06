import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { dimOptions } from '@selectors';
import { changeDim } from '@actions';
import Selector from '../../primitives/selector';

const mapStateToProps = state => ({
  width: state.width,
  height: state.height,
  options: dimOptions(state)
});

const mapDispatchToProps = {
  changeDim
};

const UnlockedSelector = ({
  width, height, options, changeDim
}) => (
  <Fragment>
    <Selector value={width} options={options}
              onChange={width => changeDim(width, height)} />
    x
    <Selector value={height} options={options}
              onChange={height => changeDim(width, height)} />
  </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(UnlockedSelector);
