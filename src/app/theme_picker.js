import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { theme, themeOptions } from './[selectors]';
import { changeTheme } from './[actions]';
import { Select } from '#/primitives';
import toCapitalCase from 'to-capital-case';

const ThemePicker = ({
  className
}) => (
  <Select className={className}
          options={useSelector(themeOptions)}
          value={useSelector(theme)}
          optionText={toCapitalCase}
          onChange={useAction(changeTheme)} />
);

export default ThemePicker;
