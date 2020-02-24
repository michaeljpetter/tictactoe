import React from 'react';
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

class LockedSelector extends React.Component {
  UNSAFE_componentWillMount() {
    const { width, changeDim } = this.props;
    changeDim(width);
  }

  render() {
    const { width, options, changeDim } = this.props;
    return (
      <Selector value={width} options={options}
                optionText={dim => `${dim} x ${dim}`}
                onChange={changeDim} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LockedSelector);
