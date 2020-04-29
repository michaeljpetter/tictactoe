import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { dim, dimOptions } from '../[selectors]';
import { changeDim } from '../[actions]';
import { Select } from '#/primitives';
import { flow, join } from 'lodash/fp';

const valueToDim = value => [value, value];

const optionText = flow(valueToDim, join(' x '));
const changeValue = flow(valueToDim, changeDim);

const LockedPicker = ({
  className
}) => {
  const [value] = useSelector(dim);
  const handleOnChange = useAction(changeValue);

  return (
    <Select className={className}
            options={useSelector(dimOptions)}
            optionText={optionText}
            value={value}
            onChange={handleOnChange} />
  );
};

export default LockedPicker;
