import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { players, playersOptions } from './[selectors]';
import { changePlayers } from './[actions]';
import { Select } from '#/ext/react';

const PlayersPicker = ({
  ...props
}) => (
  <Select options={useSelector(playersOptions)}
          value={useSelector(players)}
          onChange={useAction(changePlayers)}
          {...props} />
);

export default PlayersPicker;
