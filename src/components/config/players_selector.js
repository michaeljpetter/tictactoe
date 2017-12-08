import React from 'react';
import { connect } from 'react-redux';
import playersOptions from '../../selectors/config/players_options';
import selectPlayers from '../../actions/config/select_players';

const mapStateToProps = state => ({
  players: state.config.players,
  ...playersOptions(state)
});

const mapDispatchToProps = { selectPlayers };

const PlayersSelector = ({
  players, playersOptions, selectPlayers
}) => (
  <select value={players}
          onChange={e => selectPlayers(Number(e.target.value))}>
    {playersOptions.map(players =>
      <option key={players} value={players}>{players}</option>
    )}
  </select>
);

export default connect(mapStateToProps, mapDispatchToProps)(PlayersSelector);
