import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '@ext/redux';
import classNames from 'classnames';
import { squares, isWinSquare, canMakeMove } from '@selectors';
import { makeMove } from '@actions';
import PlayerGlyph from './player_glyph';

const Square = ({
  index
}) => {
  const player = useSelector(squares)[index];
  const win = useSelector(isWinSquare)(index);
  const canMove = useSelector(canMakeMove)(index);
  const move = useCallback(() => makeMove(index), [index]);

  return (
    <button className={classNames('square', { win })}
            disabled={!canMove}
            onClick={useAction(move)}>
      {player && <PlayerGlyph player={player} />}
    </button>
  );
};

export default Square;
