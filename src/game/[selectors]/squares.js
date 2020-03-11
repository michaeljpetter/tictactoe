import { createSelector } from 'reselect';
import { dim } from '#/config/[selectors]';
import getPlayer from './get_player';
import { get } from 'lodash/fp';

export default createSelector(
  dim,
  get('game.moves'),
  get('game.moveIndex'),
  getPlayer,
  ([width, height], moves, moveIndex, getPlayer) =>
    moves.slice(0, moveIndex).reduce(
      (sq, m, i) => (sq[m] = getPlayer(i), sq),
      Array(width * height)
    )
);
