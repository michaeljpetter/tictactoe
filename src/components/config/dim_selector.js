import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import { dimOptions } from '../../selectors';
import { changeDim } from '../../actions';

const mapStateToProps = state => ({
  value: state.dim,
  options: dimOptions(state),
  optionText: dim => `${dim} x ${dim}`
});

const mapDispatchToProps = {
  onChange: changeDim
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
