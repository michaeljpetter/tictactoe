import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import toWinOptions from '../../selectors/config/to_win_options';
import toWinChanged from '../../actions/config/to_win_changed';

const mapStateToProps = state => ({
  value: state.config.toWin,
  options: toWinOptions(state)
});

const mapDispatchToProps = {
  onChange: toWinChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
