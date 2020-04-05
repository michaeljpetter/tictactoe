import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { dim } from '#/config/[selectors]';
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
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: ({ width }) => `repeat(${width}, auto)`
    }
  };
});

const Board = () => {
  const [width, height] = useSelector(dim);
  const c = useStyles({ width });

  return (
    <div className={c.border}>
      <div className={c.board}>
        {Array.from({ length: width * height }, (_, i) =>
          <Square key={i} index={i} />
        )}
      </div>
    </div>
  );
};

export default Board;
