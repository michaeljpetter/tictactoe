import React from 'react';
import { connect } from 'react-redux';
import { flatten } from 'lodash';
import classNames from 'classnames';
import wins from '../selectors/wins';
import makeMove from '../actions/make_move';
import PlayerGlyph from './player_glyph';

const mapStateToProps = (state, ownProps) => ({
  player: state.moves[state.moveIndex].squares[ownProps.index],
  win: new Set(flatten(wins(state).map(w => w.line))).has(ownProps.index)
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
