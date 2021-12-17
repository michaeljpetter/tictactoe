import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { dim, dimOptions } from '../[selectors]';
import { changeDim } from '../[actions]';
import { Select } from '#/theming/components';

const UnlockedPicker = props => {
  const options = useSelector(dimOptions);
  const [width, height] = useSelector(dim);
  const changeDimAction = useAction(changeDim);

  const handleChangeWidth = useCallback(width => changeDimAction([width, height]), [changeDimAction, height]);
  const handleChangeHeight = useCallback(height => changeDimAction([width, height]), [changeDimAction, width]);

  return (
    <>
      <Select options={options}
              value={width}
              onChange={handleChangeWidth}
              {...props} />
      x
      <Select options={options}
              value={height}
              onChange={handleChangeHeight}
              {...props} />
    </>
  );
};

export default UnlockedPicker;
