import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import dimOptions from '../../selectors/config/dim_options';
import selectDim from '../../actions/config/select_dim';

const mapStateToProps = state => ({
  value: state.config.dim,
  options: dimOptions(state),
  optionText: dim => `${dim} x ${dim}`
});

const mapDispatchToProps = {
  onChange: selectDim
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
