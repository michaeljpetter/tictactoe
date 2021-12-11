import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { aiDelay, aiDelayRange } from './[selectors]';
import { changeAIDelay } from './[actions]';
import { Slider } from '#/ext/react';
import classNames from 'classnames';

const useStyles = createUseStyles(({ app, game: { slider } }) => ({
  slider: {
    borderRadius: app.borderRadius,
    borderWidth: slider.borderWidth,
    borderColor: slider.borderColor,
    backgroundColor: slider.backgroundColor
  },
  thumb: {
    borderRadius: app.borderRadius,
    borderWidth: slider.thumb?.borderWidth ?? slider.borderWidth,
    borderColor: slider.thumb?.borderColor ?? slider.borderColor,
    backgroundColor: slider.color
  }
}));

const AISpeedSlider = ({
  className
}) => {
  const [min, max] = useSelector(aiDelayRange);

  const c = useStyles();
  const { game: { slider } } = useTheme();

  return (
    <Slider className={classNames(c.slider, className)}
            thumbClassName={c.thumb}
            trackScale={slider.trackScale}
            fillTrack={slider.fillTrack}
            reverse
            min={min}
            max={max}
            step={50}
            value={useSelector(aiDelay)}
            onChange={useAction(changeAIDelay)} />
  );
};

export default AISpeedSlider;
