import { withTheming } from '../internal';
import { Select } from '#/ext/react';

export default withTheming({
  buttonClassName: ({ select }) => ({
    color: select.color,
    backgroundColor: select.backgroundColor,
    borderWidth: select.borderWidth,
    borderRadius: select.borderRadius
  }),
  optionClassName: ({ select }) => ({
    borderRadius: select.borderRadius,

    '&:hover': {
      color: select.backgroundColor,
      backgroundColor: select.color
    }
  })
})(Select);
