import { createSelector } from 'reselect';
import winLines from './win_lines';
import { dim } from '#/config/[selectors]';
import { get } from 'lodash/fp';

export default createSelector(
  winLines,
  get('game.moveIndex'),
  dim,
  (winLines, moveIndex, [width, height]) =>
    winLines.length || moveIndex === width * height
);
