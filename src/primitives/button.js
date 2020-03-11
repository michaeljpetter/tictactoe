import React from 'react';
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

const Button = ({
  className,
  children,
  ...props
}) => {
  const c = useStyles();

  return (
    <button className={classNames(c.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;