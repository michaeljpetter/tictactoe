import React, { forwardRef, useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useMultiRef } from '#/ext/react';
import { getComputedStyleBy } from '#/ext/dom';
import classNames from 'classnames';
import { flow, invoke, noop, once } from 'lodash/fp';

const getWidth = flow(getComputedStyleBy('width'), Number.parseFloat);

const useStyles = flow(
  ({ value, toggleElement, thumbElement }) => {
    if(!toggleElement || !thumbElement) return;

    return {
      thumbLeft: once(() =>
        value ? getWidth(toggleElement) - getWidth(thumbElement) : 0
      )
    };
  },
  createUseStyles({
    toggle: {
      border: [1, 'solid'],
      borderRadius: 0,
      position: 'relative',
      height: '1em',
      width: '1.75em',

      '&:focus': {
        outline: 'none',

        '& $thumb': {
          transition: 'left .1s'
        }
      }
    },
    thumb: {
      boxSizing: 'border-box',
      width: '1em',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: invoke('thumbLeft')
    }
  })
);

const Toggle = forwardRef(({
  className,
  thumbClassName,
  value,
  onChange
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

Toggle.defaultProps = {
  onChange: noop,
  value: false
};

if(process.env.NODE_ENV !== 'production')
  Toggle.displayName = 'Toggle';

export default Toggle;
