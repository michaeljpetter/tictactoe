import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Config from '../components/config';
import Game from '../components/game';
import '../style/app.css';

const mapStateToProps = ({ dim, players }) => ({
  dim, players
});

const App = ({ dim, players }) => (
  <Fragment>
    <div className="header">
      <Config />
    </div>
    <div className="content">
      <Game dim={dim} players={players}/>
    </div>
  </Fragment>
);

export default connect(mapStateToProps)(App);
