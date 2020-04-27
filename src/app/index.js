import React from 'react';
import { createUseStyles } from 'react-jss';
import Config from '#/config';
import Game from '#/game';
import ResetButton from './reset_button';
import ThemePicker from './theme_picker';
import { withStore } from '#/store';
import withTheme from './with_theme';
import classNames from 'classnames';
import { compose } from 'lodash/fp';

const useStyles = createUseStyles(theme => ({
  app: {
    position: 'relative',
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
    padding: 20,
    overflowY: 'auto',

    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  resetButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  themePicker: {
    position: 'absolute',
    bottom: 10,
    right: 10,
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
      <ResetButton className={c.resetButton} />
      <ThemePicker className={c.themePicker} />
    </div>
  );
};

export default compose(withStore, withTheme)(App);
