import React from 'react';
import { createUseStyles } from 'react-jss';
import { useAction } from '#/ext/redux';
import { reset } from './[actions]';
import { Button } from '#/primitives';
import { ResetIcon } from '#/res/icons';
import classNames from 'classnames';

const useStyles = createUseStyles(theme => ({
  button: {
    padding: [2, 18, 2, 15],
    fontSize: 'inherit',
    backgroundColor: theme['app.backgroundColor'],
    borderRadius: theme['app.borderRadius'],
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    height: '1rem',
    marginRight: 10,
    fill: theme['app.color'],
    stroke: theme['app.color'],
    strokeWidth: 15
  }
}));

const ResetButton = ({
  className
}) => {
  const c = useStyles();

  return (
    <Button className={classNames(c.button, className)}
            onClick={useAction(reset)}>
      <ResetIcon className={c.icon} />Reset
    </Button>
  );
};

export default ResetButton;
