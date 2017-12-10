import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Config from '../components/config';
import Game from '../components/game';
import '../style/app.css';

const mapStateToProps = state => ({
  ...state.config
});

const playerGlyphs = ['X', 'O', '▲', '◉'];

const App = ({ dim, players }) => (
  <Fragment>
    <Config />
    <Game dim={dim} players={playerGlyphs.slice(0, players)} />
  </Fragment>
);

export default connect(mapStateToProps)(App);
