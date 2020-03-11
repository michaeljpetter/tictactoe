import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { canUndo, canRedo } from './[selectors]';
import { undo, undoAll, redo, redoAll } from './[actions]';
import { UndoIcon, UndoAllIcon, RedoIcon, RedoAllIcon } from '#/res/icons';
import { Button } from '#/primitives';

const useStyles = createUseStyles(theme => ({
  history: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    width: 26,
    height: 26,
    margin: 5,
    padding: 2,
    fontSize: '1rem',
    borderWidth: theme['history.button.borderWidth'],
    borderColor: theme['history.button.borderColor'],
    borderRadius: theme['app.borderRadius'],
    backgroundColor: theme['history.button.backgroundColor'],

    '&:disabled': {
      backgroundColor: theme['history.button.disabledBackgroundColor']
    }
  },
  icon: {
    fill: theme['history.button.color'],
    stroke: theme['history.button.color'],
    strokeWidth: 2
  }
}));

const History = () => {
  const c = useStyles();
  const disableUndo = !useSelector(canUndo);
  const disableRedo = !useSelector(canRedo);

  return (
    <div className={c.history}>
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
