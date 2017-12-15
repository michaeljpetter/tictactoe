import React from 'react';
import { chain, flatten } from 'lodash';
import Square from './square';

const Board = ({
  dim, squares, winLines, onClick
}) => {
  const winSquares = new Set(flatten(winLines));
  return chain(squares)
    .map((p, i) =>
      <Square player={p} key={i} win={winSquares.has(i)}
              onClick={() => onClick(i)} />
    )
    .chunk(dim).map((row, i) =>
      <div className="board-row" key={i}>{row}</div>
    )
    .value();
};

export default Board;
