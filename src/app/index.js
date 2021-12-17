import React from 'react';
import { createUseMultiStyles } from '#/ext/jss';
import Config from '#/config';
import Game from '#/game';
import ResetButton from './reset_button';
import ThemePicker from './theme_picker';
import { withStore } from '#/store';
import withTheme from './with_theme';
import { withThemingContext } from '#/theming';
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
      right: 0,
      zIndex: 2
    },
    game: {
      marginTop: 60,
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
    },
    '@media screen and (max-height: 500px)': {
      app: {
        flexDirection: 'row'
      },
      config: {
        padding: [5, 15],
        borderRight: [1, 'solid'],
        top: 0,
        bottom: 0,
        borderBottom: 'revert',
        right: 'revert'
      },
      game: {
        marginTop: 'revert'
      },
      resetButton: {
        bottom: 10,
        right: 10,
        left: 'revert'
      },
      themePicker: {
        top: 10,
        right: 10,
        bottom: 'revert'
      },
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

export default compose(withStore, withTheme, withThemingContext('app'))(App);
