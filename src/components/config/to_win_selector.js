import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import toWinOptions from '../../selectors/to_win_options';
import changeToWin from '../../actions/change_to_win';

const mapStateToProps = state => ({
  value: state.toWin,
  options: toWinOptions(state)
});

const mapDispatchToProps = {
  onChange: changeToWin
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
