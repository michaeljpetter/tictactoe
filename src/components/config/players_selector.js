import { connect } from 'react-redux';
import { playersOptions } from '@selectors';
import { changePlayers } from '@actions';
import Selector from '../primitives/selector';

const mapStateToProps = state => ({
  value: state.players,
  options: playersOptions(state)
});

const mapDispatchToProps = {
  onChange: changePlayers
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
