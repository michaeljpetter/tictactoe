import React from 'react';
import { useTheme } from 'react-jss';
import { createUseMultiStyles } from '#/ext/jss';
import Status from './status';
import Board from './board';
import History from './history';
import AISpeedSlider from './ai_speed_slider';
import classNames from 'classnames';

const useStyles = createUseMultiStyles([
  {
    game: {
      padding: [20, 0],
      display: 'grid',
      rowGap: 10,
      placeItems: 'center'
    },
    status: {},
    board: {},
    history: {
      margin: [5, 0]
    },
    aiSpeed: {
      display: 'flex',
      alignItems: 'center',

      '&:before': {
        content: '"AI"',
        marginRight: 8
      }
    },
    '@media screen and (max-height: 500px)': {
      game: {
        padding: [7, 10],
        width: '100%',
        gridTemplateColumns: '112px 1fr min-content',
        gridTemplateRows: 'min-content 1fr repeat(2, min-content) 1fr 2rem',
        gridTemplateAreas: `
          ". status ."
          ". board ."
          ". board history"
          ". board aiSpeed"
          ". board ."
          ". board ."
        `
      },
      status: {
        gridArea: 'status'
      },
      board: {
        gridArea: 'board'
      },
      history: {
        gridArea: 'history'
      },
      aiSpeed: {
        gridArea: 'aiSpeed'
      }
    }
  },
  ({ app, game: { slider } }) => ({
    slider: {
      borderRadius: app.borderRadius,
      borderWidth: slider.borderWidth,
      borderColor: slider.borderColor,
      backgroundColor: slider.backgroundColor
    },
    sliderThumb: {
      borderRadius: app.borderRadius,
      borderWidth: slider.thumb?.borderWidth ?? slider.borderWidth,
      borderColor: slider.thumb?.borderColor ?? slider.borderColor,
      backgroundColor: slider.color
    }
  })
]);

const Game = ({
  className
}) => {
  const c = useStyles();
  const { game: { slider } } = useTheme();

  return (
    <div className={classNames(c.game, className)}>
      <Status className={c.status} />
      <Board className={c.board} />
      <History className={c.history} />
      <div className={c.aiSpeed}>
        <AISpeedSlider className={c.slider}
                       thumbClassName={c.sliderThumb}
                       trackScale={slider.trackScale}
                       fillTrack={slider.fillTrack} />
      </div>
    </div>
  );
};

export default Game;
