import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useMultiRef } from '#/ext/react';
import { getComputedStyleBy } from '#/ext/dom';
import classNames from 'classnames';
import { clamp, flow, invoke, noop, once } from 'lodash/fp';
import { splitKeys } from '#/ext/fp';

const getWidth = flow(getComputedStyleBy('width'), Number.parseFloat);
const getBackgroundColor = getComputedStyleBy('background-color');

const useStyles = flow(
  ({ trackScale: scaleY, fillTrack, value, sliderElement, thumbElement, normalize }) => {
    if(!sliderElement || !thumbElement) return;

    const sliderWidth = once(() => getWidth(sliderElement));
    const thumbWidth = once(() => getWidth(thumbElement));

    const scaleX = once(() =>
      (scaleY - 1) * thumbWidth() / sliderWidth() + 1
    );
    const thumbLeft = once(() => {
      const nvalue = normalize(value);
      return nvalue * sliderWidth() + ((.5 - nvalue) * scaleY - .5) * thumbWidth();
    });

    return {
      thumbLeft,
      scale: once(() =>
        `scale(${scaleX()}, ${scaleY})`
      ),
      revertScale: once(() =>
        `scale(${1 / scaleX()}, ${1 / scaleY})`
      ),
      fillGradient: once(() => {
        if(!fillTrack) return null;
        const stop = `${thumbLeft() + .5 * thumbWidth()}px`;
        return `linear-gradient(to right, ${getBackgroundColor(thumbElement)} ${stop}, transparent ${stop})`;
      })
    };
  },
  createUseStyles({
    slider: {
      margin: 2,
      border: [1, 'solid'],
      borderRadius: 0,
      position: 'relative',
      height: '1em',
      width: '5em',
      transform: invoke('scale'),
      backgroundImage: invoke('fillGradient'),
      touchAction: 'none',

      '&:before': {
        display: 'block',
        content: '""',
        position: 'absolute',
        inset: 0,
        transform: invoke('revertScale')
      },

      '&:focus': {
        outline: 'none'
      }
    },
    thumb: {
      boxSizing: 'border-box',
      border: [1, 'solid'],
      position: 'absolute',
      width: '1em',
      inset: '0 auto',
      transform: invoke('revertScale'),
      left: invoke('thumbLeft'),
      pointerEvents: 'none'
    }
  })
);

const Slider = forwardRef(({
  className,
  thumbClassName,
  trackScale,
  fillTrack,
  reverse,
  min,
  max,
  step,
  value,
  onChange
}, ref) => {
  const [sliderElement, setSliderElement] = useState(null);
  const [thumbElement, setThumbElement] = useState(null);

  const reflect = useMemo(() => reverse ? (center, value) => 2 * center - value : (_, value) => value, [reverse]);
  const normalize = useCallback(value => reflect(.5, (value - min) / (max - min)), [reflect, min, max]);
  const denormalize = useCallback(nvalue => reflect(.5, nvalue) * (max - min) + min, [reflect, min, max]);

  const handleChange = useCallback(
    newValue => {
      const final = clamp(min, max, Math.round(newValue / step) * step);
      if(final !== value) onChange(final);
    },
    [min, max, step, value, onChange]
  );

  const handlePointerMove = useCallback(
    e => {
      if(!e.target.hasPointerCapture(e.pointerId)) return;
      e.preventDefault();
      const { left, width } = e.target.getClientRects()[0];
      handleChange(denormalize(
        (e.clientX - left - width / 2) / (getWidth(e.target) - getWidth(thumbElement)) + .5
      ));
    },
    [thumbElement, denormalize, handleChange]
  );

  const handlePointerDown = useCallback(
    e => {
      if(e.button !== 0) return;
      e.target.focus();
      e.target.setPointerCapture(e.pointerId);
      handlePointerMove(e);
    },
    [handlePointerMove]
  );

  const handleKeyDown = useCallback(
    ({ key }) => splitKeys({
      [['ArrowUp', 'ArrowRight']]: () => handleChange(reflect(value, value + step)),
      [['ArrowDown', 'ArrowLeft']]: () => handleChange(reflect(value, value - step))
    })[key]?.(),
    [value, step, reflect, handleChange]
  );

  const c = useStyles({ trackScale, fillTrack, value, sliderElement, thumbElement, normalize });

  return (
    <div ref={useMultiRef(ref, setSliderElement)}
         role="button" tabIndex={0}
         className={classNames(c.slider, className)}
         onPointerDown={handlePointerDown}
         onPointerMove={handlePointerMove}
         onKeyDown={handleKeyDown}>
        <div ref={setThumbElement}
             className={classNames(c.thumb, thumbClassName)}>
        </div>
    </div>
  );
});

Slider.defaultProps = {
  trackScale: .5,
  fillTrack: false,
  reverse: false,
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  onChange: noop
};

if(process.env.NODE_ENV !== 'production')
  Slider.displayName = 'Slider';

export default Slider;
