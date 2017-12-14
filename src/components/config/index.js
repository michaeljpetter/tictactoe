import React from 'react';
import DimSelector from './dim_selector';
import ToWinSelector from './to_win_selector';
import PlayersSelector from './players_selector';

const Config = () => (
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

export default Config;
