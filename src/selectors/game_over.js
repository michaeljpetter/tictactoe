import { createSelector } from 'reselect';
import winLines from './win_lines';

export default createSelector(
  winLines,
  state => state.moveIndex,
  state => state.width,
  state => state.height,
  (winLines, moveIndex, width, height) =>
    winLines.length || moveIndex === width * height
);
