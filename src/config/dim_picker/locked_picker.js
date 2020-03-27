import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { dim, dimOptions } from '../[selectors]';
import { changeDim } from '../[actions]';
import { Select } from '#/primitives';
import { flow, constant, times, __, join } from 'lodash/fp';

const valueToDim = flow(constant, times(__, 2));

const optionText = flow(valueToDim, join(' x '));
const changeValue = flow(valueToDim, changeDim);

const LockedPicker = ({
  className
}) => {
  const [value] = useSelector(dim);
  const handleOnChange = useAction(changeValue);

  useEffect(() => { handleOnChange(value); }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Select className={className}
            options={useSelector(dimOptions)}
            optionText={optionText}
            value={value}
            onChange={handleOnChange} />
  );
};

export default LockedPicker;