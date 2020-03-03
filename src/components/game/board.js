import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { rows } from '@selectors';
import Square from './square';
import { cond, identity, flow, subtract, concat, max } from 'lodash/fp';

const calcInnerRadius = cond([[identity, flow(subtract, concat(0), max)]]);

const useStyles = createUseStyles(theme => {
  const borderWidth = theme['board.borderWidth'];
  const borderRadius = theme['borderRadius'];
  const innerRadius = calcInnerRadius(borderRadius, borderWidth);

  return {
    board: {
      margin: [10, 0],
      paddingTop: 1,
      paddingRight: 1,
      border: [borderWidth|0, 'solid'],
      borderColor: theme['board.borderColor'],
      borderRadius
    },
    row: {
      display: 'flex',

      '&:first-child': {
        '& :first-child': {
          borderTopLeftRadius: innerRadius
        },
        '& :last-child': {
          borderTopRightRadius: innerRadius
        }
      },
      '&:last-child': {
        '& :first-child': {
          borderBottomLeftRadius: innerRadius
        },
        '& :last-child': {
          borderBottomRightRadius: innerRadius
        }
      }
    }
  };
});

const Board = () => {
  const c = useStyles();

  return (
    <div className={c.board}>
      {useSelector(rows).map(row =>
        <div key={row} className={c.row}>
          {row.map(i =>
            <Square key={i} index={i} />
          )}
        </div>
      )}
    </div>
  );
};

export default Board;
