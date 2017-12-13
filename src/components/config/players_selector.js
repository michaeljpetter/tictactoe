import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import playersOptions from '../../selectors/config/players_options';
import playersChanged from '../../actions/config/players_changed';

const mapStateToProps = state => ({
  value: state.config.players,
  options: playersOptions(state)
});

const mapDispatchToProps = {
  onChange: playersChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
