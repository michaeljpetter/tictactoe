import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '@ext/redux';
import { dim, dimOptions } from '@selectors';
import { changeDim } from '@actions';
import { Select } from '@primitives';
import { __ } from 'lodash/fp';

const UnlockedSelector = ({
  className
}) => {
  const options = useSelector(dimOptions);
  const [width, height] = useSelector(dim);
  const handleOnChange = useAction(changeDim);

  const handleOnChangeWidth = useCallback(handleOnChange(__, height), [handleOnChange, height]);
  const handleOnChangeHeight = useCallback(handleOnChange(width), [handleOnChange, width]);

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

export default UnlockedSelector;
