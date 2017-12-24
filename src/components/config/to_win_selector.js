import { connect } from 'react-redux';
import { toWinOptions } from '@selectors';
import { changeToWin } from '@actions';
import Selector from '../primitives/selector';

const mapStateToProps = state => ({
  value: state.toWin,
  options: toWinOptions(state)
});

const mapDispatchToProps = {
  onChange: changeToWin
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
