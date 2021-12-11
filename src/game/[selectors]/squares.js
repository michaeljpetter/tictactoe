import { createSelector } from 'reselect';
import { canMakeMoveSquares, heatSquares, playerSquares, winSquares } from './internal';
import { rest } from 'lodash/fp';
import { zipAllWith } from '#/ext/fp';

export default createSelector(
  playerSquares,
  winSquares,
  canMakeMoveSquares,
  heatSquares,
  rest(zipAllWith((player, wins, canMakeMove, heat) => ({
    player,
    isWin: !!wins,
    canMakeMove,
    heat
  })))
);
