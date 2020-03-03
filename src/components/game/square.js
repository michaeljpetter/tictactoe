import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useAction } from '@ext/redux';
import { squares, isWinSquare, canMakeMove } from '@selectors';
import { makeMove } from '@actions';
import { Button } from '@primitives';
import PlayerGlyph from './player_glyph';
import classNames from 'classnames';

const useStyles = createUseStyles(theme => ({
  square: {
    width: '3.75rem',
    height: '3.75rem',
    marginTop: -1,
    marginRight: -1,
    padding: 0,
    border: [1, 'solid'],
    fontSize: '2.5rem',
    fontWeight: 'bold',
    cursor: 'default',
    color: theme['board.color'],
    backgroundColor: theme['board.backgroundColor'],
    borderColor: theme['board.borderColor'],

    '&:enabled': {
      cursor: 'pointer'
    }
  },
  win: {
    backgroundColor: theme['board.winBackgroundColor'],
  }
}));

const Square = ({
  index
}) => {
  const c = useStyles();
  const player = useSelector(squares)[index];
  const win = useSelector(isWinSquare)(index);
  const canMove = useSelector(canMakeMove)(index);
  const move = useCallback(() => makeMove(index), [index]);

  return (
    <Button className={classNames(c.square, { [c.win]: win })}
            disabled={!canMove}
            onClick={useAction(move)}>
      {player && <PlayerGlyph player={player} />}
    </Button>
  );
};

export default Square;
