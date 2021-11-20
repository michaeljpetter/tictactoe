import React from 'react';
import { createUseMultiStyles } from '#/ext/jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { canRedo, canUndo } from './[selectors]';
import { redo, redoAll, undo, undoAll } from './[actions]';
import { RedoAllIcon, RedoIcon, UndoAllIcon, UndoIcon } from '#/res/icons';
import { Button } from '#/ext/react';

const useStyles = createUseMultiStyles([
  {
    history: {
      display: 'flex',
      alignItems: 'center'
    },
    button: {
      width: 26,
      height: 26,
      margin: 5,
      padding: 2,
      fontSize: '1rem'
    },
    icon: {
      strokeWidth: 2
    }
  },
  ({ app, history }) => ({
    button: {
      borderWidth: history.button.borderWidth,
      borderColor: history.button.borderColor,
      borderRadius: app.borderRadius,
      backgroundColor: history.button.backgroundColor,

      '&:disabled': {
        backgroundColor: history.button.disabledBackgroundColor
      }
    },
    icon: {
      fill: history.button.color,
      stroke: history.button.color
    }
  })
]);

const History = () => {
  const disableUndo = !useSelector(canUndo);
  const disableRedo = !useSelector(canRedo);

  const c = useStyles();

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
