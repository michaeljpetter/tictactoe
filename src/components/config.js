import React from 'react';
import DimSelector from './config/dim_selector';
import ToWinSelector from './config/to_win_selector';
import PlayersSelector from './config/players_selector';

export default () => (
  <div className="config">
    <div className="dim">
      <DimSelector />
    </div>
    <div className="to-win">
      <ToWinSelector />
    </div>
    <div className="players">
      <PlayersSelector />
    </div>
  </div>
);
