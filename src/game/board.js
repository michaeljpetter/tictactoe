import React from 'react';
import { useTheme } from 'react-jss';
import { createUseMultiStyles } from '#/ext/jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { dim } from '#/config/[selectors]';
import { squares } from './[selectors]';
import { makeMove } from './[actions]';
import { Button } from '#/ext/react';
import Player from './player';
import Color from 'color';
import classNames from 'classnames';

const useStyles = createUseMultiStyles([
  {
    border: {
      padding: 1
    },
    board: {
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: ([width]) => `repeat(${width}, auto)`
    },
    square: {
      width: '3.75rem',
      height: '3.75rem',
      margin: -1,
      padding: 0,
      border: [1, 'solid'],
      fontSize: '2.5rem',
      fontWeight: 'bold',
      position: 'relative'
    },
    heat: {
      position: 'absolute',
      inset: 0
    },
    win: {
      zIndex: 1,
      animation: '$fanfare .75s alternate 2'
    },
    '@keyframes fanfare': {
      to: {
        transform: 'rotate(360deg) scale(1.25)'
      }
    }
  },
  ({ app, game: { board } }) => ({
    border: {
      backgroundColor: board.borderColor,
      border: [board.borderWidth, 'solid'],
      borderColor: board.borderColor,
      borderRadius: app.borderRadius
    },
    board: {
      borderRadius: app.borderRadius && Math.max(0, app.borderRadius - board.borderWidth / 2 - 1)
    },
    square: {
      color: board.color,
      backgroundColor: board.backgroundColor,
      borderColor: board.borderColor
    },
    heat: {
      opacity: board.heat.opacity
    },
    win: {
      backgroundColor: board.winBackgroundColor,
    }
  })
]);

const Board = ({
  className
}) => {
  const handleClick = useAction(makeMove);

  const c = useStyles(useSelector(dim));
  const { game: { board: { heat } } } = useTheme();

  const getHeatColor =
    ((start, end) => heat => start.mix(end, heat))(
      Color(heat.startColor), Color(heat.endColor)
    );

  return (
    <div className={classNames(c.border, className)}>
      <div className={c.board}>
        {useSelector(squares).map(({ player, isWin, canMakeMove, heat }, i) =>
          <Button key={i}
                  className={classNames(c.square, { [c.win]: isWin })}
                  disabled={!canMakeMove}
                  onClick={() => handleClick(i)}>
            {player != null && <Player value={player} />}
            {heat != null && <div className={c.heat} style={{ backgroundColor: getHeatColor(heat) }} />}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Board;
