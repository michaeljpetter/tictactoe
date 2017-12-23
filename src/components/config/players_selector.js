import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import { playersOptions } from '../../selectors';
import { changePlayers } from '../../actions';

const mapStateToProps = state => ({
  value: state.players,
  options: playersOptions(state)
});

const mapDispatchToProps = {
  onChange: changePlayers
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
