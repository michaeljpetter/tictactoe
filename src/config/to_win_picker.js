import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { toWin, toWinOptions } from './[selectors]';
import { changeToWin } from './[actions]';
import { Select } from '#/theming/components';

const ToWinPicker = props => (
  <Select options={useSelector(toWinOptions)}
          value={useSelector(toWin)}
          onChange={useAction(changeToWin)}
          {...props} />
);

export default ToWinPicker;
