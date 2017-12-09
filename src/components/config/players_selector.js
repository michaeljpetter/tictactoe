import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import playersOptions from '../../selectors/config/players_options';
import selectPlayers from '../../actions/config/select_players';

const mapStateToProps = state => ({
  value: state.config.players,
  options: playersOptions(state)
});

const mapDispatchToProps = {
  onChange: selectPlayers
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
