import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { identity, flow, get, nth, __ } from 'lodash/fp';

const useStyles = createUseStyles({
  select: {
    color: 'inherit',
    background: 'inherit',
    fontFamily: 'inherit',
    fontSize: '1.25rem',

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
    flow(get('target.selectedIndex'), nth(__, options), onChange),
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
