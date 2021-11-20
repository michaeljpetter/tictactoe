import React, { forwardRef, useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useMultiRef } from '#/ext/react';
import { getComputedStyleBy } from '#/ext/dom';
import classNames from 'classnames';

const getWidth = getComputedStyleBy('width');

const useStyles = createUseStyles({
  toggle: {
    border: [1, 'solid'],
    borderRadius: 0,
    position: 'relative',
    height: '1em',
    width: '1.75em',

    '&:focus': {
      outline: 'none',

      '& $thumb': {
        transition: 'left .1s',
      }
    }
  },
  thumb: {
    boxSizing: 'border-box',
    width: '1em',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: ({ value, toggleElement, thumbElement }) =>
      value && toggleElement && thumbElement &&
        `calc(${getWidth(toggleElement)} - ${getWidth(thumbElement)})`,

    fallbacks: {
      left: 0
    }
  }
});

const Toggle = forwardRef(({
  className,
  thumbClassName,
  onChange,
  value
}, ref) => {
  const [toggleElement, setToggleElement] = useState(null);
  const [thumbElement, setThumbElement] = useState(null);

  const handleClick = useCallback(() => void onChange(!value), [onChange, value]);
  const handleKeyPress = useCallback(({ key }) => { if(key === 'Enter') handleClick(); }, [handleClick]);

  const c = useStyles({ value, toggleElement, thumbElement });

  return (
    <div ref={useMultiRef(ref, setToggleElement)}
         role="button" tabIndex={0}
         className={classNames(c.toggle, className)}
         onClick={handleClick}
         onKeyPress={handleKeyPress}>
        <div ref={setThumbElement}
             className={classNames(c.thumb, thumbClassName)}>
        </div>
    </div>
  );
});

if(process.env.NODE_ENV !== 'production')
  Toggle.displayName = 'Toggle';

export default Toggle;
