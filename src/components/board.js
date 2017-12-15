import React from 'react';
import { connect } from 'react-redux';
import { chain } from 'lodash';
import Square from './square';

const mapStateToProps = state => ({
  dim: state.dim,
  squaresLength: state.moves[state.moveIndex].squares.length
});

const Board = ({
  dim, squaresLength
}) => (
  <div className="board">
    {chain().range(squaresLength)
       .map(i =>
         <Square key={i} index={i} />
       )
       .chunk(dim).map((row, i) =>
         <div key={i} className="board-row">{row}</div>
       )
       .value()
    }
  </div>
);

export default connect(mapStateToProps)(Board);
