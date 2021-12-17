import { withTheming } from '../internal';
import { Input } from '#/ext/react';

export default withTheming({
  className: ({ input }) => ({
    borderWidth: input.borderWidth,
    borderRadius: input.borderRadius,
    backgroundColor: input.backgroundColor,

    '&:focus': {
      backgroundColor: input.editBackgroundColor
    },

    '&::placeholder': {
      color: input.color,
    }
  })
})(Input);
