import { withTheming } from '../internal';
import { Slider } from '#/ext/react';

export default withTheming({
  className: ({ slider }) => ({
      borderRadius: slider.borderRadius,
      borderWidth: slider.borderWidth,
      borderColor: slider.borderColor,
      backgroundColor: slider.backgroundColor
  }),
  thumbClassName: ({ slider }) => ({
    borderRadius: slider.borderRadius,
    borderWidth: slider.thumb.borderWidth,
    borderColor: slider.thumb.borderColor,
    backgroundColor: slider.color
  }),
  trackScale: ({ slider }) => slider.trackScale,
  fillTrack: ({ slider }) => slider.fillTrack
})(Slider);
