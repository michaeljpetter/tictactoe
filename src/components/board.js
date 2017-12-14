import React from 'react';
import { chain, flatten } from 'lodash';
import Square from './square';

const Board = ({
  dim, squares, winLines, onClick
}) => {
  const winSquares = new Set(flatten(winLines));
  return chain(squares)
    .map((s, i) =>
      <Square value={s} key={i} win={winSquares.has(i)}
              onClick={() => onClick(i)} />
    )
    .chunk(dim).map((row, i) =>
      <div className="board-row" key={i}>{row}</div>
    )
    .value();
};

export default Board;
