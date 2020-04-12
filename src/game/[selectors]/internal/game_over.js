import { createSelector } from 'reselect';
import { dim } from '#/config/[selectors]';
import winLines from './win_lines';
import { get } from 'lodash/fp';

export default createSelector(
  winLines,
  get('game.moves.prev.length'),
  dim,
  (winLines, moveCount, [width, height]) =>
    winLines.length || moveCount === width * height
);
