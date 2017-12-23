import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import { toWinOptions } from '../../selectors';
import { changeToWin } from '../../actions';

const mapStateToProps = state => ({
  value: state.toWin,
  options: toWinOptions(state)
});

const mapDispatchToProps = {
  onChange: changeToWin
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
