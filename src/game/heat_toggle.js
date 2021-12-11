import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { heatShown } from './[selectors]';
import { showHeat } from './[actions]';
import { Toggle } from '#/ext/react';
import classNames from 'classnames';

const useStyles = createUseStyles(({ app, game: { toggle } }) => ({
  toggle: {
    borderWidth: toggle.borderWidth,
    borderColor: toggle.borderColor,
    borderRadius: app.borderRadius,
    backgroundColor: toggle.backgroundColor
  },
  thumb: {
    borderWidth: toggle.thumb?.borderWidth,
    borderColor: toggle.thumb?.borderColor,
    borderRadius: Math.max(0, (app.borderRadius ?? 0) + (toggle.thumb?.borderWidth ?? 0) - (toggle.borderWidth ?? 1)),
    backgroundColor: value => toggle[['offColor', 'onColor'][+value]]
  }
}));

const HeatToggle = ({
  className
}) => {
  const value = useSelector(heatShown);

  const c = useStyles(value);

  return (
    <Toggle className={classNames(c.toggle, className)}
            thumbClassName={c.thumb}
            value={value}
            onChange={useAction(showHeat)} />
  );
};

export default HeatToggle;
