import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '@ext/redux';
import { dim, dimOptions } from '@selectors';
import { changeDim } from '@actions';
import Selector from '../../primitives/selector';
import { __ } from 'lodash/fp';

const UnlockedSelector = () => {
  const options = useSelector(dimOptions);
  const [width, height] = useSelector(dim);
  const handleOnChange = useAction(changeDim);

  const handleOnChangeWidth = useCallback(handleOnChange(__, height), [handleOnChange, height]);
  const handleOnChangeHeight = useCallback(handleOnChange(width), [handleOnChange, width]);

  return (
    <>
      <Selector options={options}
                value={width}
                onChange={handleOnChangeWidth} />
      x
      <Selector options={options}
                value={height}
                onChange={handleOnChangeHeight} />
    </>
  );
};

export default UnlockedSelector;
