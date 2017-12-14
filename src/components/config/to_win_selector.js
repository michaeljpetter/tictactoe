import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import toWinOptions from '../../selectors/to_win_options';
import toWinChanged from '../../actions/to_win_changed';

const mapStateToProps = state => ({
  value: state.toWin,
  options: toWinOptions(state)
});

const mapDispatchToProps = {
  onChange: toWinChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
