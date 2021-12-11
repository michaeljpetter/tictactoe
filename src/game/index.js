import React from 'react';
import { createUseStyles } from 'react-jss';
import Status from './status';
import Board from './board';
import History from './history';
import AISpeedSlider from './ai_speed_slider';
import HeatToggle from './heat_toggle';
import classNames from 'classnames';

const useStyles = createUseStyles({
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
  heat: {
    display: 'flex',
    alignItems: 'center',

    '&:before': {
      content: '"Heat"',
      marginRight: 8
    }
  },
  '@media screen and (max-height: 500px)': {
    game: {
      padding: [7, 10],
      width: '100%',
      gridTemplateColumns: '112px 1fr min-content',
      gridTemplateRows: 'min-content 1fr repeat(3, min-content) 1fr 2rem',
      gridTemplateAreas: `
        ". status ."
        ". board ."
        ". board history"
        ". board aiSpeed"
        ". board heat"
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
    },
    heat: {
      gridArea: 'heat'
    }
  }
});

const Game = ({
  className
}) => {
  const c = useStyles();

  return (
    <div className={classNames(c.game, className)}>
      <Status className={c.status} />
      <Board className={c.board} />
      <History className={c.history} />
      <div className={c.aiSpeed}>
        <AISpeedSlider />
      </div>
      <div className={c.heat}>
        <HeatToggle />
      </div>
    </div>
  );
};

export default Game;
