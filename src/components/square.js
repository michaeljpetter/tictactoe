import React from 'react';
import classNames from 'classnames';
import PlayerGlyph from './player_glyph';

const Square = ({
  player, win, onClick
}) => (
  <div role="button"
       className={classNames('square', { win })}
       onClick={onClick}>
    {player ? <PlayerGlyph player={player} /> : null}
  </div>
);

export default Square;
