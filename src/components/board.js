import React from 'react';
import { connect } from 'react-redux';
import { chain } from 'lodash';
import activeMove from '../selectors/active_move';
import Square from './square';

const mapStateToProps = state => ({
  dim: state.dim,
  squaresLength: activeMove(state).squares.length 
});

const Board = ({
  dim, squaresLength
}) => (
  <div className="board">
    {chain(squaresLength).range()
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
