import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import toWinOptions from '../../selectors/config/to_win_options';
import selectToWin from '../../actions/config/select_to_win';

const mapStateToProps = state => ({
  value: state.config.toWin,
  options: toWinOptions(state)
});

const mapDispatchToProps = {
  onChange: selectToWin
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
