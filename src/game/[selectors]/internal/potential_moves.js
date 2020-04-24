import { createSelector } from 'reselect';
import { dim, players } from '#/config/[selectors]';
import { divRem } from '#/ext/math';

export default createSelector(
  dim,
  players,
  ([width, height], players) => {
    const [div, rem] = divRem(width * height, players);

    return Array.from({ length: players }, (_, i) => div + (i < rem));
  }
);
