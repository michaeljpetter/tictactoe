import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import dimOptions from '../../selectors/dim_options';
import dimChanged from '../../actions/dim_changed';

const mapStateToProps = state => ({
  value: state.dim,
  options: dimOptions(state),
  optionText: dim => `${dim} x ${dim}`
});

const mapDispatchToProps = {
  onChange: dimChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
