import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { dim, dimOptions } from '../[selectors]';
import { changeDim } from '../[actions]';
import { Select } from '#/ext/react';

const optionText = value => `${value} x ${value}`;
const changeValue = value => changeDim([value, value]);

const LockedPicker = ({
  ...props
}) => {
  const [value] = useSelector(dim);

  return (
    <Select options={useSelector(dimOptions)}
            optionText={optionText}
            value={value}
            onChange={useAction(changeValue)}
            {...props} />
  );
};

export default LockedPicker;
