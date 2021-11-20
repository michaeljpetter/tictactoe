import React from 'react';
import { createUseMultiStyles } from '#/ext/jss';
import Config from '#/config';
import Game from '#/game';
import ResetButton from './reset_button';
import ThemePicker from './theme_picker';
import { withStore } from '#/store';
import withTheme from './with_theme';
import classNames from 'classnames';
import { compose } from 'lodash/fp';

const useStyles = createUseMultiStyles([
  {
    app: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      userSelect: 'none'
    },
    config: {
      padding: [15, 5, 17],
      borderBottom: [1, 'solid'],
      position: 'absolute',
      left: 0,
      right: 0
    },
    game: {
      marginTop: 60,
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
      left: 10
    },
    themePicker: {
      position: 'absolute',
      bottom: 10,
      right: 10
    }
  },
  ({ app }) => ({
    app: {
      font: app.font,
      letterSpacing: app.letterSpacing,
      color: app.color,
      backgroundColor: app.backgroundColor
    }
  })
]);

const App = ({
  className
}) => {
  const c = useStyles();

  return (
    <div className={classNames(c.app, className)}>
      <Config className={c.config} />
      <Game className={c.game} />
      <ResetButton className={c.resetButton} />
      <ThemePicker className={c.themePicker} />
    </div>
  );
};

export default compose(withStore, withTheme)(App);
