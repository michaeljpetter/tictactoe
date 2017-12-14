import React from 'react';
import { connect } from 'react-redux';
import Board from './board';
import LinkedList from '../ext/linked_list';
import lines from '../selectors/lines';
import '../ext/ruby';

const mapStateToProps = state => ({
  lines: lines(state)
});

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reverseMoves: false,
      ...this.reset(props)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.reset(nextProps));
  }

  reset(props) {
    const { dim, players } = props;

    return {
      moves: [{
        squares: Array(Math.pow(dim, 2)).fill(null),
        player: new LinkedList(players).cycle().head
      }],
      moveIndex: 0
    };
  }

  render() {
    const { moves, moveIndex, reverseMoves } = this.state;
    const move = moves[moveIndex];
    const wins = this.findWins();

    const { dim } = this.props;

    const moveButtons = moves.map((move, index) => {
      const desc = index
        ? (() => {
          const prev = moves[index - 1];
          const [x, y] = move.squares.findIndex((s, i) => s && !prev.squares[i])
                                     .tap(i => [1 + i % dim, 1 + i / dim|0])
          return `${prev.player.value} → (${x}, ${y})`;
        })()
        : 'Game start';
      return (
        <li key={index} className={index === moveIndex ? 'current' : ''}>
          <button onClick={() => this.jumpTo(index)}>{desc}</button>
        </li>
      );
    });

    const status = wins.length
      ? 'Winner: ' + wins[0].player
      : 'Next player: ' + move.player.value;

    return (
      <div className="game">
        <div className="game-board">
          <Board dim={dim}
                 squares={move.squares}
                 winLines={wins.map(w => w.line)}
                 onClick={i => this.makeMove(i)} />
        </div>
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

  makeMove(i) {
    let { moves, moveIndex } = this.state;
    const move = moves[moveIndex];

    if(this.findWins().length || move.squares[i])
      return;

    ++moveIndex;
    moves = moves.slice(0, moveIndex).concat([{
      squares: move.squares.slice().tap(s => { s[i] = move.player.value }),
      player: move.player.next
    }]);

    this.setState({ moves, moveIndex });
  }

  jumpTo(moveIndex) {
    this.setState({ moveIndex });
  }

  reverseMoves() {
    this.setState({ reverseMoves: !this.state.reverseMoves });
  }

  findWins() {
    const { moves, moveIndex } = this.state;
    const { lines } = this.props;
    const squares = moves[moveIndex].squares;
    return lines.reduce((wins, line) => {
      const uniq = new Set(line.map(i => squares[i]))
      const winner = uniq.size === 1 && uniq.values().next().value;
      winner && wins.push({ player: winner, line });
      return wins;
    }, []);
  }
}

export default connect(mapStateToProps)(Game);
