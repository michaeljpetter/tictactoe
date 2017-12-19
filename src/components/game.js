import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import getPlayer from '../selectors/get_player';
import nextPlayer from '../selectors/next_player';
import winner from '../selectors/winner';
import jumpToMove from '../actions/jump_to_move';
import PlayerGlyph from './player_glyph';
import Board from './board';

const mapStateToProps = state => ({
  dim: state.dim,
  nextPlayer: nextPlayer(state),
  moves: state.moves,
  moveIndex: state.moveIndex,
  getPlayer: getPlayer(state),
  winner: winner(state)
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
    const { dim, nextPlayer, moves, moveIndex, getPlayer, winner, jumpToMove } = this.props;
    const { reverseMoves } = this.state;

    const moveButtons = ['Game start', ...moves.map((move, index) => {
      const [x, y] = [1 + move % dim, 1 + move / dim|0];
      return (
        <Fragment>
          <PlayerGlyph player={getPlayer(index)} />{` → (${x}, ${y})`}
        </Fragment>
      );
    })].map((desc, i) => (
        <li key={i} className={classNames({ active: i === moveIndex })}>
          <button onClick={() => jumpToMove(i)}>{desc}</button>
        </li>
    ));

    const status = winner
      ? <Fragment>Winner: <PlayerGlyph player={winner} /></Fragment>
      : <Fragment>Next player: <PlayerGlyph player={nextPlayer} /></Fragment>;

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
