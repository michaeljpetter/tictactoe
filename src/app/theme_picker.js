import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { theme, themeOptions } from './[selectors]';
import { changeTheme } from './[actions]';
import { Select } from '#/theming/components';
import { startCase } from 'lodash/fp';

const ThemePicker = props => (
  <Select options={useSelector(themeOptions)}
          value={useSelector(theme)}
          optionText={startCase}
          onChange={useAction(changeTheme)}
          {...props} />
);

export default ThemePicker;
