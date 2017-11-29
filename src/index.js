import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './extensions.js';
import LinkedList from './linked_list.js';

function Square(props) {
  const { value, win, onClick } = props;
  return (
    <div role="button"
         className={'square' +
           (win ? ' win' : '') +
           (value ? '' : ' empty')
         }
         onClick={onClick}>
      {value}
    </div>
  );
}

class Board extends React.Component {
  static defaultProps = { winLine: [] };

  render() {
    const { dim, squares, winLine, onClick } = this.props;
    return (
      Array.from(squares.length.times(), i =>
        <Square value={squares[i]} key={i} win={winLine.includes(i)}
                onClick={() => onClick(i)}/>
      ).tap(squares => Array.from(dim.times(), r =>
        squares.slice(r * dim, (r + 1) * dim)
      )).map((row, index) =>
        <div className="board-row" key={index}>{row}</div>
      )
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({
      reverseMoves: false
    }, this.reset(props));
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.reset(nextProps));
  }

  reset(props) {
    const { dim } = props;

    return {
      moves: [{
        squares: Array(Math.pow(props.dim, 2)).fill(null),
        player: new LinkedList(['X', 'O']).cycle().head
      }],
      moveIndex: 0,
      lines: this.findLines(dim)
    };
  }

  findLines(dim) {
    const line = Array.from(dim.times());

    const rows = Array.from(dim.times(), r => line.map(i => r * dim + i));
    const columns = Array.from(dim.times(), r => line.map(i => r + dim * i));
    const diagonals = [
      line.map(i => i * (dim + 1)),
      line.map(i => (i + 1) * (dim - 1))
    ];

    return [...rows, ...columns, ...diagonals];
  }

  render() {
    const { moves, moveIndex, reverseMoves } = this.state;
    const move = moves[moveIndex];
    const winner = this.findWinner();

    const dim = this.props.dim;

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

    const status = winner
      ? 'Winner: ' + winner.player
      : 'Next player: ' + move.player.value;

    return (
      <div className="game">
        <div className="game-board">
          <Board dim={dim}
                 squares={move.squares}
                 winLine={winner && winner.line}
                 onClick={i => this.makeMove(i)}/>
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

    if(this.findWinner() || move.squares[i])
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

  findWinner() {
    const { moves, moveIndex, lines } = this.state;
    const squares = moves[moveIndex].squares;
    for(const line of lines) {
      const uniq = new Set(line.map(i => squares[i]))
      const winner = uniq.size === 1 && uniq.values().next().value;
      if(winner)
        return { player: winner, line };
    }
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dim: props.dim };
  }

  onDimChanged(e) {
    const dim = parseInt(e.target.value, 10);

    this.setState({ dim });
  }

  render() {
    const { dim } = this.state;

    return (
      <div className="controller">
        <div className="config">
          <div className="dim">
            <select value={dim} onChange={e => this.onDimChanged(e)}>
              {[3, 4, 5].map(dim =>
                <option key={dim} value={dim}>{`${dim} x ${dim}`}</option>
              )}
            </select>
          </div>
        </div>
        <Game dim={dim}/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Controller dim={3}/>,
  document.getElementById('root')
);
