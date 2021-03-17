import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { dim, dimOptions } from '../[selectors]';
import { changeDim } from '../[actions]';
import { Select } from '#/primitives';

const UnlockedPicker = ({
  className
}) => {
  const options = useSelector(dimOptions);
  const [width, height] = useSelector(dim);
  const handleOnChange = useAction(changeDim);

  const handleOnChangeWidth = useCallback(width => handleOnChange([width, height]), [handleOnChange, height]);
  const handleOnChangeHeight = useCallback(height => handleOnChange([width, height]), [handleOnChange, width]);

  return (
    <>
      <Select className={className}
              options={options}
              value={width}
              onChange={handleOnChangeWidth} />
      x
      <Select className={className}
              options={options}
              value={height}
              onChange={handleOnChangeHeight} />
    </>
  );
};

export default UnlockedPicker;
