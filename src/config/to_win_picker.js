import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { toWin, toWinOptions } from './[selectors]';
import { changeToWin } from './[actions]';
import { Select } from '#/primitives';

const ToWinPicker = ({
  className
}) => (
  <Select className={className}
          options={useSelector(toWinOptions)}
          value={useSelector(toWin)}
          onChange={useAction(changeToWin)} />
);

export default ToWinPicker;
