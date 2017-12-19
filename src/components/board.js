import React from 'react';
import { connect } from 'react-redux';
import { chain } from 'lodash';
import squares from '../selectors/squares';
import Square from './square';

const mapStateToProps = state => ({
  dim: state.dim,
  squaresLength: squares(state).length
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
