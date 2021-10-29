import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
  button: {
    color: 'inherit',
    background: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    border: [1, 'solid'],
    borderRadius: 0,

    '&:focus': {
      outline: 'none'
    }
  }
});

const Button = forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const c = useStyles();

  return (
    <button ref={ref} className={classNames(c.button, className)} {...props}>
      {children}
    </button>
  );
});

if(process.env.NODE_ENV !== 'production')
  Button.displayName = 'Button';

export default Button;
