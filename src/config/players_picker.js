import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { players, playersOptions } from './[selectors]';
import { changePlayers } from './[actions]';
import { Select } from '#/primitives';

const PlayersPicker = ({
  className
}) => (
  <Select className={className}
          options={useSelector(playersOptions)}
          value={useSelector(players)}
          onChange={useAction(changePlayers)} />
);

export default PlayersPicker;
