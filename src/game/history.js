import React from 'react';
import { createUseMultiStyles } from '#/ext/jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { canRedo, canUndo } from './[selectors]';
import { redo, redoAll, undo, undoAll } from './[actions]';
import { RedoAllIcon, RedoIcon, UndoAllIcon, UndoIcon } from '#/res/icons';
import { Button } from '#/theming/components';
import classNames from 'classnames';

const useStyles = createUseMultiStyles([
  {
    history: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      columnGap: 10,
      alignItems: 'center'
    },
    button: {
      width: 26,
      height: 26,
      padding: 2
    },
    icon: {
      strokeWidth: 2
    }
  },
  ({ game: { button } }) => ({
    icon: {
      fill: button.color,
      stroke: button.color
    }
  })
]);

const History = ({
  className
}) => {
  const disableUndo = !useSelector(canUndo);
  const disableRedo = !useSelector(canRedo);

  const c = useStyles();

  return (
    <div className={classNames(c.history, className)}>
      <Button className={c.button} 
              disabled={disableUndo}
              onClick={useAction(undoAll)}>
        <UndoAllIcon className={c.icon} />
      </Button>
      <Button className={c.button} 
              disabled={disableUndo}
              onClick={useAction(undo)}>
        <UndoIcon className={c.icon} />
      </Button>
      <Button className={c.button} 
              disabled={disableRedo}
              onClick={useAction(redo)}>
        <RedoIcon className={c.icon} />
      </Button>
      <Button className={c.button} 
              disabled={disableRedo}
              onClick={useAction(redoAll)}>
        <RedoAllIcon className={c.icon} />
      </Button>
    </div>
  );
};

export default History;
