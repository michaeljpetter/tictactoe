import React from 'react';
import { createUseMultiStyles } from '#/ext/jss';
import { useAction } from '#/ext/redux';
import { reset } from './[actions]';
import { Button } from '#/ext/react';
import { ResetIcon } from '#/res/icons';
import classNames from 'classnames';

const useStyles = createUseMultiStyles([
  {
    button: {
      padding: [2, 18, 2, 15],
      fontSize: 'inherit',
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      height: '1rem',
      marginRight: 10,
      strokeWidth: 15
    }
  },
  ({ app }) => ({
    button: {
      backgroundColor: app.backgroundColor,
      borderRadius: app.borderRadius
    },
    icon: {
      fill: app.color,
      stroke: app.color
    }
  })
]);

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
