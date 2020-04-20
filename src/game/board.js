import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useAction } from '#/ext/redux';
import { dim } from '#/config/[selectors]';
import { squares } from './[selectors]';
import { makeMove } from './[actions]';
import { Button } from '#/primitives';
import Player from './player';
import classNames from 'classnames';

const calcInnerRadius = (borderRadius, borderWidth) =>
  borderRadius ? Math.max(0, borderRadius - borderWidth - 1) : undefined;

const useStyles = createUseStyles(theme => {
  const borderWidth = theme['board.borderWidth'] || 0;
  const borderRadius = theme['app.borderRadius'];
  const borderColor = theme['board.borderColor'] || theme['board.color'];
  const innerRadius = calcInnerRadius(borderRadius, borderWidth);

  return {
    border: {
      margin: [10, 0],
      padding: 1,
      backgroundColor: borderColor,
      border: [borderWidth, 'solid'],
      borderColor,
      borderRadius
    },
    board: {
      borderRadius: innerRadius,
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
      color: theme['board.color'],
      backgroundColor: theme['board.backgroundColor'],
      borderColor: theme['board.borderColor'],
    },
    win: {
      backgroundColor: theme['board.winBackgroundColor'],
    }
  };
});

const Board = () => {
  const c = useStyles(useSelector(dim));

  const handleOnClick = useAction(makeMove);

  return (
    <div className={c.border}>
      <div className={c.board}>
        {useSelector(squares).map(({ player, canMakeMove, isWin }, i) =>
          <Button key={i}
                  className={classNames(c.square, { [c.win]: isWin })}
                  disabled={!canMakeMove}
                  onClick={() => handleOnClick(i)}>
            {player && <Player value={player} />}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Board;
