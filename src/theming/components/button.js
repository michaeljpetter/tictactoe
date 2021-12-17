import { withTheming } from '../internal';
import { Button } from '#/ext/react';

export default withTheming({
  className: ({ button }) => ({
    borderWidth: button.borderWidth,
    borderColor: button.borderColor,
    borderRadius: button.borderRadius,
    backgroundColor: button.backgroundColor,

    '&:disabled': {
      backgroundColor: button.disabledBackgroundColor
    }
  })
})(Button);
