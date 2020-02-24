import React from 'react';
import Config from '../components/config';
import Game from '../components/game';
import '../style/app.scss';

const App = () => (
  <>
    <div className="header">
      <Config />
    </div>
    <div className="content">
      <Game />
    </div>
  </>
);

export default App;
