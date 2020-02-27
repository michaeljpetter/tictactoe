import { createSelector } from 'reselect';
import winLines from './win_lines';
import dim from './dim';
import { get } from 'lodash/fp';

export default createSelector(
  winLines,
  get('moveIndex'),
  dim,
  (winLines, moveIndex, [width, height]) =>
    winLines.length || moveIndex === width * height
);
