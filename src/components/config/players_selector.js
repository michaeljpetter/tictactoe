import { connect } from 'react-redux';
import Selector from '../primitives/selector';
import playersOptions from '../../selectors/players_options';
import changePlayers from '../../actions/change_players';

const mapStateToProps = state => ({
  value: state.players,
  options: playersOptions(state)
});

const mapDispatchToProps = {
  onChange: changePlayers
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
