import React, { useCallback, useRef, useState } from 'react';
import { createUseMultiStyles } from '#/ext/jss';
import DimPicker from './dim_picker';
import ToWinPicker from './to_win_picker';
import PlayersPicker from './players_picker';
import { Button } from '#/ext/react';
import { PlayersIcon } from '#/res/icons';
import PlayersConfig from './players_config';
import { useClickOutside } from '#/ext/react';
import classNames from 'classnames';
import { memoize } from 'lodash/fp';

const useStyles = createUseMultiStyles([
  {
    section: {
      maxWidth: 500,
      margin: [0, 'auto'],
    },
    static: {
      composes: '$section',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      whiteSpace: 'nowrap'
    },
    labeled: {
      display: 'flex',
      alignItems: 'center',
    },
    dim: {
      composes: '$labeled',

      '&:before': {
        content: '"Size:"'
      }
    },
    toWin: {
      composes: '$labeled',
      justifyContent: 'center',

      '&:before': {
        content: '"To win:"',
        marginRight: 5
      }
    },
    players: {
      composes: '$labeled',
      justifyContent: 'end',

      '&:before': {
        content: '"Players:"',
        marginRight: 1
      }
    },
    playersButton: {
      width: 20,
      marginRight: 4,
      padding: 0,
      border: 'none',
      display: 'inline-flex'
    },
    dynamic: {
      composes: '$section',
      overflowY: 'hidden',
      animation: '$dynamicOpen .2s'
    },
    '@keyframes dynamicOpen': {
      from: {
        maxHeight: 0
      },
      to: {
        maxHeight: 210
      }
    },
    dynamicConfig: {
      marginTop: 18,
      paddingTop: 18,
      borderTop: [1, 'solid']
    }
  },
  ({ app, config }) => ({
    config: {
      color: config.color,
      backgroundColor: config.backgroundColor,
    },
    picker: {
      color: config.color,
      backgroundColor: config.picker.backgroundColor,
      borderWidth: config.borderWidth,
      borderRadius: app.borderRadius
    },
    pickerItem: {
      composes: '$picker',

      '&:hover': {
        color: config.picker.backgroundColor,
        backgroundColor: config.color
      }
    },
    playersIcon: {
      fill: config.color
    }
  })
]);

const Config = ({
  className
}) => {
  const ref = useRef();
  const [DynamicConfig, setDynamicConfig] = useState(null);

  const handleClickDynamic = useCallback(  //eslint-disable-line react-hooks/exhaustive-deps
    memoize(Component => () => void setDynamicConfig(value => value === Component ? null : Component)),
    []
  );

  const handleClickOutside = useCallback(() => void setDynamicConfig(null), []);
  useClickOutside(ref.current, handleClickOutside);

  const c = useStyles();

  return (
    <div ref={ref} className={classNames(c.config, className)}>
      <div className={c.static}>
        <div className={c.dim}>
          <DimPicker className={c.picker} itemClassName={c.pickerItem} />
        </div>
        <div className={c.toWin}>
          <ToWinPicker className={c.picker} itemClassName={c.pickerItem} />
        </div>
        <div className={c.players}>
          <Button className={c.playersButton} onClick={handleClickDynamic(PlayersConfig)}>
            <PlayersIcon className={c.playersIcon} />
          </Button>
          <PlayersPicker className={c.picker} itemClassName={c.pickerItem} />
        </div>
      </div>
      {DynamicConfig && (
        <div className={c.dynamic}>
          <DynamicConfig className={c.dynamicConfig} />
        </div>
      )}
    </div>
  );
};

export default Config;
