import { connect } from 'react-redux';
import { dimOptions } from '@selectors';
import { changeDim } from '@actions';
import Selector from '../primitives/selector';

const mapStateToProps = state => ({
  value: state.width,
  options: dimOptions(state),
  optionText: dim => `${dim} x ${dim}`
});

const mapDispatchToProps = {
  onChange: dim => changeDim(dim, dim)
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
