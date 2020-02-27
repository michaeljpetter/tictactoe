import React from 'react';
import { useSelector } from 'react-redux';
import { rows } from '@selectors';
import Square from './square';

const Board = () => (
  <div className="board">
    {useSelector(rows).map(row =>
      <div key={row} className="board-row">
        {row.map(i =>
          <Square key={i} index={i} />
        )}
      </div>
    )}
  </div>
);

export default Board;
