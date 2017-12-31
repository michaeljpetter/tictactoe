import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { squares, isWinSquare, canMakeMove } from '@selectors';
import { makeMove } from '@actions';
import PlayerGlyph from './player_glyph';

const mapStateToProps = (state, { index }) => ({
  player: squares(state)[index],
  win: isWinSquare(state)(index),
  canMakeMove: canMakeMove(state)(index)
});

const mapDispatchToProps = (dispatch, { index }) => bindActionCreators({
  makeMove: () => makeMove(index)
}, dispatch);

const Square = ({
  player, win, canMakeMove, makeMove
}) => (
  <button className={classNames('square', { win })}
          disabled={!canMakeMove} onClick={makeMove}>
    {player ? <PlayerGlyph player={player} /> : null}
  </button>
);

export default connect(mapStateToProps, mapDispatchToProps)(Square);
