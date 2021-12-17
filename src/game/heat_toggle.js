import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { heatShown } from './[selectors]';
import { showHeat } from './[actions]';
import { Toggle } from '#/theming/components';

const HeatToggle = props => (
  <Toggle value={useSelector(heatShown)}
          onChange={useAction(showHeat)}
          {...props} />
);

export default HeatToggle;
