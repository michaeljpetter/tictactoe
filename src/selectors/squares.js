import { createSelector } from 'reselect';
import dim from './dim';
import getPlayer from './get_player';
import { get } from 'lodash/fp';

export default createSelector(
  dim,
  get('moves'),
  get('moveIndex'),
  getPlayer,
  ([width, height], moves, moveIndex, getPlayer) =>
    moves.slice(0, moveIndex).reduce(
      (sq, m, i) => (sq[m] = getPlayer(i), sq),
      Array(width * height)
    )
);
