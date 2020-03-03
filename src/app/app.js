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
    fontFamily: '"Century Gothic", Futura, sans-serif',
    fontSize: 20,
    color: theme['app.color'],
    backgroundColor: theme['app.backgroundColor']
  },
  header: {
    padding: [15, 0],
    color: theme['header.color'],
    backgroundColor: theme['header.backgroundColor']
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
    borderColor: theme['app.color'],
    borderRadius: 5
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