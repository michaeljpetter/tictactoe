import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { rows } from './[selectors]';
import Square from './square';

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
      overflow: 'hidden'
    },
    row: {
      display: 'flex'
    }
  };
});

const Board = () => {
  const c = useStyles();

  return (
    <div className={c.border}>
      <div className={c.board}>
        {useSelector(rows).map(row =>
          <div key={row} className={c.row}>
            {row.map(i =>
              <Square key={i} index={i} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
