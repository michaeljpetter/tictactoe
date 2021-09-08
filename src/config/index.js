import React from 'react';
import { createUseStyles } from 'react-jss';
import DimPicker from './dim_picker';
import ToWinPicker from './to_win_picker';
import PlayersPicker from './players_picker';

const useStyles = createUseStyles(({ config, app }) => ({
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
  picker: {
    backgroundColor: config.picker.backgroundColor,
    borderWidth: config.picker.borderWidth,
    borderRadius: app.borderRadius
  }
}));

const Config = () => {
  const c = useStyles();

  return (
    <div className={c.config}>
      <div className={c.dim}>
        <DimPicker className={c.picker} />
      </div>
      <div className={c.toWin}>
        <ToWinPicker className={c.picker} />
      </div>
      <div className={c.players}>
        <PlayersPicker className={c.picker} />
      </div>
    </div>
  );
};

export default Config;
