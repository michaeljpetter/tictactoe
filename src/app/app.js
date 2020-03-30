import React from 'react';
import { createUseStyles } from 'react-jss';
import Config from '#/config';
import Game from '#/game';
import ResetButton from './reset_button';
import ThemePicker from './theme_picker';
import classNames from 'classnames';

const useStyles = createUseStyles(theme => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    font: theme['app.font'],
    letterSpacing: theme['app.letterSpacing'],
    color: theme['app.color'],
    backgroundColor: theme['app.backgroundColor'],
    userSelect: 'none'
  },
  header: {
    padding: [15, 5],
    color: theme['header.color'],
    backgroundColor: theme['header.backgroundColor'],
    borderBottom: [1, 'solid'],
    borderColor: theme['header.color']
  },
  content: {
    padding: 20
  },
  footer: {
    flex: 1,
    padding: 10,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
}));

const App = ({
  className
}) => {
  const c = useStyles();

  return (
    <div className={classNames(c.app, className)}>
      <div className={c.header}>
        <Config />
      </div>
      <div className={c.content}>
        <Game />
      </div>
      <div className={c.footer}>
        <ResetButton />
        <ThemePicker />
      </div>
    </div>
  );
};

export default App;
