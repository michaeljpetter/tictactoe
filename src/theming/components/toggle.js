import { withTheming } from '../internal';
import { Toggle } from '#/ext/react';

export default withTheming({
  className: ({ toggle }) => ({
    borderWidth: toggle.borderWidth,
    borderColor: toggle.borderColor,
    borderRadius: toggle.borderRadius,
    backgroundColor: toggle.backgroundColor
  }),
  thumbClassName: ({ toggle }, { value }) => ({
    borderWidth: toggle.thumb.borderWidth,
    borderColor: toggle.thumb.borderColor,
    borderRadius: Math.max(0, (toggle.borderRadius ?? 0) + (toggle.thumb.borderWidth ?? 0) - (toggle.borderWidth ?? 1)),
    backgroundColor: toggle[['offColor', 'onColor'][+value]]
  })
})(Toggle);
