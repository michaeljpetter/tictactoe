import React from 'react';
import Game from './game';
import '../ext/ruby';

export default class App extends React.Component {
  static defaultProps = {
    playerGlyphs: ['X', 'O', '▲', '◉']
  };

  constructor(props) {
    super(props);
    this.state = { dim: 3, toWin: 3, players: 2 };
  }

  onDimChanged(e) {
    const dim = parseInt(e.target.value, 10);
    const toWin = Math.min(this.state.toWin, dim);
    this.setState({ dim, toWin });
  }

  onToWinChanged(e) {
    const toWin = parseInt(e.target.value, 10);
    this.setState({ toWin });
  }

  onPlayersChanged(e) {
    const players = parseInt(e.target.value, 10);
    this.setState({ players });
  }

  render() {
    const { playerGlyphs } = this.props;
    const { dim, toWin, players } = this.state;

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
          <div className="to-win">
            <select value={toWin} onChange={e => this.onToWinChanged(e)}>
              {Array.from((3).upto(dim), toWin =>
                <option key={toWin} value={toWin}>{toWin}</option>
              )}
            </select>
          </div>
          <div className="players">
            <select value={players} onChange={e => this.onPlayersChanged(e)}>
              {Array.from((2).upto(playerGlyphs.length), players =>
                <option key={players} value={players}>{players}</option>
              )}
            </select>
          </div>
        </div>
        <Game dim={dim} toWin={toWin} players={playerGlyphs.slice(0, players)}/>
      </div>
    );
  }
}
