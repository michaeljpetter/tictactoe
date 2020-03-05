import React from 'react';
import { createUseStyles } from 'react-jss';
import DimSelector from './dim_selector';
import ToWinSelector from './to_win_selector';
import PlayersSelector from './players_selector';

const useStyles = createUseStyles(theme => ({
  config: {
    display: 'flex',
    maxWidth: 500,
    margin: [0, 'auto'],
    textAlign: 'center',
    whiteSpace: 'nowrap'
  },
  dim: {
    flex: 1.2,
    textAlign: 'left',

    '&:before': {
      content: '"Size:"'
    }
  },
  toWin: {
    flex: 1,

    '&:before': {
      content: '"To win:"',
      marginRight: 5
    }
  },
  players: {
    flex: 1,
    textAlign: 'right',

    '&:before': {
      content: '"Players:"',
      marginRight: 5
    }
  },
  selector: {
    backgroundColor: theme['config.selector.backgroundColor'],
    borderWidth: theme['config.selector.borderWidth'],
    borderRadius: theme['app.borderRadius'],
  }
}));

const Config = () => {
  const c = useStyles();

  return (
    <div className={c.config}>
      <div className={c.dim}>
        <DimSelector className={c.selector} />
      </div>
      <div className={c.toWin}>
        <ToWinSelector className={c.selector} />
      </div>
      <div className={c.players}>
        <PlayersSelector className={c.selector} />
      </div>
    </div>
  );
};

export default Config;
