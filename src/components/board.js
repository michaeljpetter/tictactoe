import React from 'react';
import { connect } from 'react-redux';
import { chain, flatten } from 'lodash';
import wins from '../selectors/wins';
import makeMove from '../actions/make_move';
import Square from './square';

const mapStateToProps = state => ({
  dim: state.dim,
  squares: state.moves[state.moveIndex].squares,
  winSquares: new Set(flatten(wins(state).map(w => w.line)))
});

const mapDispatchToProps = {
  makeMove
};

const Board = ({
  dim, squares, winSquares, makeMove
}) => (
  <div className="board">
    {chain(squares)
       .map((p, i) =>
         <Square player={p} key={i} win={winSquares.has(i)}
                 onClick={() => makeMove(i)} />
       )
       .chunk(dim).map((row, i) =>
         <div className="board-row" key={i}>{row}</div>
       )
       .value()
    }
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
