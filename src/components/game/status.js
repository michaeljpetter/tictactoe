import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { nextPlayer, winner } from '../../selectors';
import PlayerGlyph from './player_glyph';

const mapStateToProps = state => ({
  nextPlayer: nextPlayer(state),
  winner: winner(state)
});

const Status = ({
  nextPlayer, winner
}) => {
  const status = winner
    ? <Fragment>Winner: <PlayerGlyph player={winner} /></Fragment>
    : <Fragment>Next player: <PlayerGlyph player={nextPlayer} /></Fragment>;

  return (
    <div className="status">{status}</div>
  );
};

export default connect(mapStateToProps)(Status);
