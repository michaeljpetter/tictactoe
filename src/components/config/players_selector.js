import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '@ext/redux';
import { players, playersOptions } from '@selectors';
import { changePlayers } from '@actions';
import Selector from '../primitives/selector';

const PlayersSelector = () => (
  <Selector options={useSelector(playersOptions)}
            value={useSelector(players)}
            onChange={useAction(changePlayers)} />
);

export default PlayersSelector;
