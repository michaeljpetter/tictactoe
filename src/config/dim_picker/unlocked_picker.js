import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { dim, dimOptions } from '../[selectors]';
import { changeDim } from '../[actions]';
import { Select } from '#/primitives';
import { __, concat, flow } from 'lodash/fp';

const UnlockedPicker = ({
  className
}) => {
  const options = useSelector(dimOptions);
  const [width, height] = useSelector(dim);
  const handleOnChange = useAction(changeDim);

  const handleOnChangeWidth = useCallback(flow(concat(__, height), handleOnChange), [handleOnChange, height]);
  const handleOnChangeHeight = useCallback(flow(concat(width), handleOnChange), [handleOnChange, width]);

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
