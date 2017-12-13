import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import dimOptions from '../../selectors/config/dim_options';
import dimChanged from '../../actions/config/dim_changed';

const mapStateToProps = state => ({
  value: state.config.dim,
  options: dimOptions(state),
  optionText: dim => `${dim} x ${dim}`
});

const mapDispatchToProps = {
  onChange: dimChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
