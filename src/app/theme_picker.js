import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { theme, themeOptions } from './[selectors]';
import { changeTheme } from './[actions]';
import { Select } from '#/ext/react';
import classNames from 'classnames';
import { startCase } from 'lodash/fp';

const useStyles = createUseStyles(({ app }) => ({
  picker: {
    color: app.color,
    backgroundColor: app.backgroundColor,
    borderRadius: app.borderRadius,
  },
  pickerItem: {
    composes: '$picker',

    '&:hover': {
      color: app.backgroundColor,
      backgroundColor: app.color,
    }
  }
}));

const ThemePicker = ({
  className
}) => {
  const c = useStyles();

  return (
    <Select className={classNames(c.picker, className)}
            itemClassName={c.pickerItem}
            options={useSelector(themeOptions)}
            value={useSelector(theme)}
            optionText={startCase}
            onChange={useAction(changeTheme)} />
  );
};

export default ThemePicker;
