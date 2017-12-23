import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { squares, isWinSquare } from '../selectors';
import { makeMove } from '../actions';
import PlayerGlyph from './player_glyph';

const mapStateToProps = (state, ownProps) => ({
  player: squares(state)[ownProps.index],
  win: isWinSquare(state)(ownProps.index)
});

const mapDispatchToProps = {
  makeMove
};

const Square = ({
  index, player, win, makeMove
}) => (
  <div role="button"
       className={classNames('square', { win })}
       onClick={() => makeMove(index)}>
    {player ? <PlayerGlyph player={player} /> : null}
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Square);
