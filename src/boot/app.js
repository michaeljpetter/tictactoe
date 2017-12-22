import React, { Fragment } from 'react';
import Config from '../components/config';
import Game from '../components/game';
import '../style/app.scss';

const App = () => (
  <Fragment>
    <div className="header">
      <Config />
    </div>
    <div className="content">
      <Game />
    </div>
  </Fragment>
);

export default App;
