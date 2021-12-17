import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { aiDelay, aiDelayRange } from './[selectors]';
import { changeAIDelay } from './[actions]';
import { Slider } from '#/theming/components';

const AISpeedSlider = props => {
  const [min, max] = useSelector(aiDelayRange);

  return (
    <Slider reverse
            min={min}
            max={max}
            step={50}
            value={useSelector(aiDelay)}
            onChange={useAction(changeAIDelay)}
            {...props} />
  );
};

export default AISpeedSlider;
