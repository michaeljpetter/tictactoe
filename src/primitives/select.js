import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { __, flow, identity, nth } from 'lodash/fp';

const useStyles = createUseStyles({
  select: {
    color: 'inherit',
    background: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    padding: [2, 7],
    border: [1, 'solid'],
    borderRadius: 0,
    '-webkit-appearance': 'none',

    '&:focus': {
      outline: 'none'
    }
  }
});

const Select = ({
  className,
  options,
  optionText = identity,
  onChange,
  ...props
}) => {
  const c = useStyles();

  const handleOnChange = useCallback(
    flow(e => e.target.selectedIndex, nth(__, options), onChange),
    [options, onChange]
  );

  return (
    <select className={classNames(c.select, className)} onChange={handleOnChange} {...props}>
      {options.map(opt =>
        <option key={opt} value={opt}>{optionText(opt)}</option>
      )}
    </select>
  );
};

export default Select;
