import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import dimOptions from '../../selectors/dim_options';
import changeDim from '../../actions/change_dim';

const mapStateToProps = state => ({
  value: state.dim,
  options: dimOptions(state),
  optionText: dim => `${dim} x ${dim}`
});

const mapDispatchToProps = {
  onChange: changeDim
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
