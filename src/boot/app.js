import React from 'react';
import { connect } from 'react-redux';
import Config from '../components/config';
import Game from '../components/game';
import '../style/app.css';

const mapStateToProps = state => ({
  ...state.config
});

const playerGlyphs = ['X', 'O', '▲', '◉'];

const App = ({ dim, toWin, players }) => (
  <div className="app">
    <Config />
    <Game dim={dim} toWin={toWin} players={playerGlyphs.slice(0, players)} />
  </div>
);

export default connect(mapStateToProps)(App);
