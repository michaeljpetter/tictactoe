import { createSelector } from 'reselect';
import { dim } from '#/config/[selectors]';
import wins from './wins';

export default createSelector(
  dim,
  wins,
  ([width, height], wins) =>
    wins.reduce(
      (acc, line) => (line.forEach(i => ++acc[i]), acc),
      Array(width * height).fill(0)
    )
);
