import React from 'react';
import { createUseStyles } from 'react-jss';
import Config from '../components/config';
import Game from '../components/game';
import ThemeSelector from '../components/theme_selector';
import classNames from 'classnames';

const useStyles = createUseStyles(theme => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    font: theme['app.font'],
    letterSpacing: theme['app.letterSpacing'],
    color: theme['app.color'],
    backgroundColor: theme['app.backgroundColor']
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
  theme: {
    flex: 1,
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'column-reverse',
    margin: [0, 10, 10, 0]
  },
  themeSelector: {
    textAlignLast: 'center',
    borderColor: theme['app.color'],
    borderRadius: theme['app.borderRadius']
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
      <div className={c.theme}>
        <ThemeSelector className={c.themeSelector} />
      </div>
    </div>
  );
};

export default App;
