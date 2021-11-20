import React, { forwardRef, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { noop } from 'lodash/fp';

const useStyles = createUseStyles({
  input: {
    color: 'inherit',
    background: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    border: [1, 'solid'],
    borderRadius: 0,
    padding: [2, 4],

    '&:focus': {
      outline: 'none'
    }
  }
});

const Input = forwardRef(({
  className,
  onInput = noop,
  onChange = noop,
  ...props
}, ref) => {
  const c = useStyles();

  const handleInput = useCallback(e => void onInput(e.target.value), [onInput]);
  const handleChange = useCallback(e => void onChange(e.target.value), [onChange]);

  return (
    <input ref={ref}
           className={classNames(c.input, className)}
           onInput={handleInput}
           onChange={handleChange}
           {...props} />
  );
});

if(process.env.NODE_ENV !== 'production')
  Input.displayName = 'Input';

export default Input;
