import React from 'react';
import Square from './square';
import '../ext/ruby';

export default class Board extends React.Component {
  static defaultProps = { winLines: [] };

  render() {
    const { dim, squares, winLines, onClick } = this.props;
    const winSquares = new Set([].concat(...winLines));
    return (
      Array.from(squares.length.times(), i =>
        <Square value={squares[i]} key={i} win={winSquares.has(i)}
                onClick={() => onClick(i)} />
      ).tap(squares => Array.from(dim.times(), r =>
        squares.slice(r * dim, (r + 1) * dim)
      )).map((row, index) =>
        <div className="board-row" key={index}>{row}</div>
      )
    );
  }
}
