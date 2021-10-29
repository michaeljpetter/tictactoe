import React from 'react';
import { createUseMultiStyles } from '#/ext/jss';
import DimPicker from './dim_picker';
import ToWinPicker from './to_win_picker';
import PlayersPicker from './players_picker';

const useStyles = createUseMultiStyles([
  {
    config: {
      display: 'flex',
      maxWidth: 500,
      margin: [0, 'auto', 2],
      whiteSpace: 'nowrap'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    dim: {
      composes: ['$container'],
      flex: 1.2,
      justifyContent: 'start',

      '&:before': {
        content: '"Size:"'
      }
    },
    toWin: {
      composes: ['$container'],
      flex: 1,
      justifyContent: 'center',

      '&:before': {
        content: '"To win:"',
        marginRight: 5
      }
    },
    players: {
      composes: ['$container'],
      flex: 1,
      justifyContent: 'end',

      '&:before': {
        content: '"Players:"',
        marginRight: 5
      }
    }
  },
  ({ config, app, header }) => ({
    picker: {
      color: header.color,
      backgroundColor: config.picker.backgroundColor,
      borderWidth: config.picker.borderWidth,
      borderRadius: app.borderRadius
    },
    pickerItem: {
      composes: ['$picker'],

      '&:hover': {
        color: config.picker.backgroundColor,
        backgroundColor: header.color
      }
    }
  })
]);

const Config = () => {
  const c = useStyles();

  return (
    <div className={c.config}>
      <div className={c.dim}>
        <DimPicker className={c.picker} itemClassName={c.pickerItem} />
      </div>
      <div className={c.toWin}>
        <ToWinPicker className={c.picker} itemClassName={c.pickerItem} />
      </div>
      <div className={c.players}>
        <PlayersPicker className={c.picker} itemClassName={c.pickerItem} />
      </div>
    </div>
  );
};

export default Config;
