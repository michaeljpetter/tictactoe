import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { ai } from '../[selectors]';
import { changeAI } from '../[actions]';
import { Toggle } from '#/ext/react';

const useStyles = createUseStyles(({ app, config, config: { toggle } }) => ({
  toggle: {
    borderWidth: config.borderWidth,
    borderRadius: app.borderRadius,
    backgroundColor: toggle.backgroundColor
  },
  thumb: {
    borderRadius: Math.max(0, (app.borderRadius ?? 0) - (config.borderWidth ?? 1)),
    backgroundColor: value => toggle[['offColor', 'onColor'][+value]]
  }
}));

const AIConfig = ({
  player
}) => {
  const value = useSelector(ai)[player];

  const changeAIAction = useAction(changeAI);

  const handleChange = useCallback(
    value => void changeAIAction(player, value),
    [changeAIAction, player]
  );

  const c = useStyles(value);

  return (
    <Toggle className={c.toggle}
            thumbClassName={c.thumb}
            value={value}
            onChange={handleChange} />
  );
};

export default AIConfig;
