import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { theme, themeOptions } from './[selectors]';
import { changeTheme } from './[actions]';
import { Select } from '#/primitives';
import toCapitalCase from 'to-capital-case';

const useStyles = createUseStyles(theme => ({
  picker: {
    textAlignLast: 'center',
    borderRadius: theme['app.borderRadius']
  }
}));

const ThemePicker = () => {
  const c = useStyles();

  return (
    <Select className={c.picker}
            options={useSelector(themeOptions)}
            value={useSelector(theme)}
            optionText={toCapitalCase}
            onChange={useAction(changeTheme)} />
  );
};

export default ThemePicker;
