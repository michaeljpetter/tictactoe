import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '@ext/redux';
import { dim, dimOptions } from '@selectors';
import { changeDim } from '@actions';
import { Select } from '@primitives';

const optionText = value => `${value} x ${value}`;
const changeValue = value => changeDim(value, value);

const LockedSelector = ({
  className
}) => {
  const [value] = useSelector(dim);
  const handleOnChange = useAction(changeValue);

  useEffect(() => handleOnChange(value), []);

  return (
    <Select className={className}
            options={useSelector(dimOptions)}
            optionText={optionText}
            value={value}
            onChange={handleOnChange} />
  );
};

export default LockedSelector;
