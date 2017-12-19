import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import squares from '../selectors/squares';
import isWinSquare from '../selectors/is_win_square';
import makeMove from '../actions/make_move';
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
