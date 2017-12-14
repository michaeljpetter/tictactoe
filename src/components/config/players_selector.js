import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import playersOptions from '../../selectors/players_options';
import playersChanged from '../../actions/players_changed';

const mapStateToProps = state => ({
  value: state.players,
  options: playersOptions(state)
});

const mapDispatchToProps = {
  onChange: playersChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
