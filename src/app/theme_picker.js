import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { theme, themeOptions } from './[selectors]';
import { changeTheme } from './[actions]';
import { Select } from '#/primitives';
import toCapitalCase from 'to-capital-case';
import classNames from 'classnames';

const useStyles = createUseStyles(({ app }) => ({
  picker: {
    textAlignLast: 'center',
    backgroundColor: app.backgroundColor,
    borderRadius: app.borderRadius
  }
}));

const ThemePicker = ({
  className
}) => {
  const c = useStyles();

  return (
    <Select className={classNames(c.picker, className)}
            options={useSelector(themeOptions)}
            value={useSelector(theme)}
            optionText={toCapitalCase}
            onChange={useAction(changeTheme)} />
  );
};

export default ThemePicker;
