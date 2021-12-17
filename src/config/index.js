import React, { useCallback, useRef, useState } from 'react';
import { createUseMultiStyles } from '#/ext/jss';
import DimPicker from './dim_picker';
import ToWinPicker from './to_win_picker';
import PlayersPicker from './players_picker';
import { Button } from '#/ext/react';
import { PlayersIcon } from '#/res/icons';
import PlayersConfig from './players_config';
import { useClickOutside } from '#/ext/react';
import { withThemingContext } from '#/theming';
import classNames from 'classnames';
import { memoize } from 'lodash/fp';

const useStyles = createUseMultiStyles([
  {
    config: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    section: {
      width: '100%',
      maxWidth: 500
    },
    static: {
      composes: '$section',
      display: 'grid',
      justifyItems: 'center',
      gridTemplateColumns: 'repeat(3, 1fr)',
      whiteSpace: 'nowrap'
    },
    labeled: {
      display: 'flex',
      alignItems: 'center'
    },
    dim: {
      composes: '$labeled',
      justifySelf: 'start',

      '&:before': {
        content: '"Size:"'
      }
    },
    toWin: {
      composes: '$labeled',

      '&:before': {
        content: '"To win:"',
        marginRight: 5
      }
    },
    players: {
      composes: '$labeled',
      justifySelf: 'end',

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
    picker: {},
    dynamic: {
      composes: '$section',
      overflow: 'hidden',
      animation: '$dynamicOpenTop .2s'
    },
    '@keyframes dynamicOpenTop': {
      from: {
        maxHeight: 0
      },
      to: {
        maxHeight: 280
      }
    },
    dynamicConfig: {
      marginTop: 18,
      padding: [18, '10%', 0],
      borderTop: [1, 'solid']
    },
    '@media screen and (max-height: 500px)': {
      config: {
        flexDirection: 'row'
      },
      section: {
        height: '100%',
        maxHeight: 250,
        width: 'revert',
        maxWidth: 'revert'
      },
      static: {
        gridTemplateColumns: '63px min-content',
        gridTemplateRows: 'repeat(2, min-content) 1fr repeat(2, min-content) 1fr repeat(2, min-content)',
        gridTemplateAreas: `
          "dimLabel dimLabel"
          "dim dim"
          ". ."
          "toWinLabel toWinLabel"
          "toWin toWin"
          ". ."
          "playersLabel playersLabel"
          "playersButton players"
        `,
        rowGap: 5,
        alignItems: 'center'
      },
      labeled: {
        display: 'contents',

        '&:before': {
          justifySelf: 'start',
          margin: 'revert'
        },

        '& $picker': {
          justifySelf: 'end'
        }
      },
      dim: {
        '&:before': {
          gridArea: 'dimLabel'
        },

        '& $picker': {
          gridArea: 'dim'
        }
      },
      toWin: {
        '&:before': {
          gridArea: 'toWinLabel'
        },

        '& $picker': {
          gridArea: 'toWin'
        }
      },
      players: {
        '&:before': {
          gridArea: 'playersLabel'
        },

        '& $picker': {
          gridArea: 'players'
        }
      },
      playersButton: {
        gridArea: 'playersButton',
        justifySelf: 'end'
      },
      dynamic: {
        animation: '$dynamicOpenLeft .2s'
      },
      '@keyframes dynamicOpenLeft': {
        from: {
          maxWidth: 0
        },
        to: {
          maxWidth: 260
        }
      },
      dynamicConfig: {
        boxSizing: 'border-box',
        width: 'max-content',
        height: '100%',
        marginLeft: 15,
        padding: [0, 0, 0, 15],
        borderLeft: [1, 'solid'],
        marginTop: 'revert',
        borderTop: 'revert'
      }
    }
  },
  ({ config }) => ({
    config: {
      color: config.color,
      backgroundColor: config.backgroundColor,
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
          <DimPicker className={c.picker} />
        </div>
        <div className={c.toWin}>
          <ToWinPicker className={c.picker} />
        </div>
        <div className={c.players}>
          <Button className={c.playersButton} onClick={handleClickDynamic(PlayersConfig)}>
            <PlayersIcon className={c.playersIcon} />
          </Button>
          <PlayersPicker className={c.picker} />
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

export default withThemingContext('config')(Config);
