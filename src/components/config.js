import React from 'react';
import { connect } from 'react-redux';
import configOptionsSelector from '../selectors/config_options';
import * as configActions from '../actions/config';

const mapStateToProps = state => ({
  ...state.config,
  ...configOptionsSelector(state)
});

const mapDispatchToProps = {
  ...configActions
};

const Config = ({
  dim, dimOptions, setDim,
  toWin, toWinOptions, setToWin,
  players, playersOptions, setPlayers
}) => (
  <div className="config">
    <div className="dim">
      <select value={dim}
              onChange={e => setDim(Number(e.target.value))}>
        {dimOptions.map(dim =>
          <option key={dim} value={dim}>{`${dim} x ${dim}`}</option>
        )}
      </select>
    </div>
    <div className="to-win">
      <select value={toWin}
              onChange={e => setToWin(Number(e.target.value))}>
        {toWinOptions.map(toWin =>
          <option key={toWin} value={toWin}>{toWin}</option>
        )}
      </select>
    </div>
    <div className="players">
      <select value={players}
              onChange={e => setPlayers(Number(e.target.value))}>
        {playersOptions.map(players =>
          <option key={players} value={players}>{players}</option>
        )}
      </select>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Config);
