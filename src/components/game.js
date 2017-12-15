import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { chain, spread, negate, eq } from 'lodash';
import wins from '../selectors/wins';
import jumpToMove from '../actions/jump_to_move';
import PlayerGlyph from './player_glyph';
import Board from './board';

const mapStateToProps = state => ({
  dim: state.dim,
  moves: state.moves,
  currentMove: state.moves[state.moveIndex],
  wins: wins(state)
});

const mapDispatchToProps = {
  jumpToMove
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reverseMoves: false
    };
  }

  reverseMoves() {
    this.setState({ reverseMoves: !this.state.reverseMoves });
  }

  render() {
    const { dim, moves, currentMove, wins, jumpToMove } = this.props;
    const { reverseMoves } = this.state;

    const moveButtons = moves.map((move, index) => {
      const desc = index
        ? (() => {
          const prev = moves[index - 1];
          const [x, y] = chain(move.squares).zip(prev.squares)
            .map(spread(negate(eq))).findIndex()
            .thru(i => [1 + i % dim, 1 + i / dim|0]);
          return (
            <Fragment>
              <PlayerGlyph player={prev.player} />{` → (${x}, ${y})`}
            </Fragment>
          );
        })()
        : 'Game start';
      return (
        <li key={index} className={classNames({ current: move === currentMove })}>
          <button onClick={() => jumpToMove(index)}>{desc}</button>
        </li>
      );
    });

    const status = wins.length
      ? <Fragment>Winner: <PlayerGlyph player={wins[0].player} /></Fragment>
      : <Fragment>Next player: <PlayerGlyph player={currentMove.player} /></Fragment>;

    return (
      <div className="game">
        <Board />
        <div className="game-info">
          <div className="status">{status}</div>
          <div className="moves">Moves:
            <button className="reverse" onClick={() => this.reverseMoves()}>
              {reverseMoves ? '▼' : '▲'}
            </button>
            <ol reversed={reverseMoves}>
              {reverseMoves ? [...moveButtons].reverse() : moveButtons}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
