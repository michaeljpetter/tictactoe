import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { ai } from '../[selectors]';
import { changeAI } from '../[actions]';
import { Toggle } from '#/theming/components';

const AIConfig = ({
  player
}) => {
  const changeAIAction = useAction(changeAI);

  const handleChange = useCallback(
    value => void changeAIAction(player, value),
    [changeAIAction, player]
  );

  return (
    <Toggle value={useSelector(ai)[player]}
            onChange={handleChange} />
  );
};

export default AIConfig;
