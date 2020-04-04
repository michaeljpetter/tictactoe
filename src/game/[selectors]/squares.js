import { createSelector } from 'reselect';
import { dim } from '#/config/[selectors]';
import getPlayer from './get_player';
import { get } from 'lodash/fp';

export default createSelector(
  dim,
  get('game.moves'),
  getPlayer,
  ([width, height], { prev, current }, getPlayer) =>
    [...prev, current].slice(1).reduce(
      (acc, move, i) => (acc[move] = getPlayer(i), acc),
      Array(width * height)
    )
);
