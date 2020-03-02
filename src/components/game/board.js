import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { rows } from '@selectors';
import Square from './square';

const useStyles = createUseStyles(theme => ({
  board: {
    margin: [10, 0],
    paddingTop: 1,
    paddingRight: 1,
    border: '2px solid',
    borderRadius: 5,
    borderColor: theme['board.borderColor'],
  },
  row: {
    display: 'flex',

    '&:first-child': {
      '& :first-child': {
        borderTopLeftRadius: 3
      },
      '& :last-child': {
        borderTopRightRadius: 3
      }
    },
    '&:last-child': {
      '& :first-child': {
        borderBottomLeftRadius: 3
      },
      '& :last-child': {
        borderBottomRightRadius: 3
      }
    }
  }
}));

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
