import { createSelector } from 'reselect';
import { players } from '#/config/[selectors]';
import { get } from 'lodash/fp';

export default createSelector(
  get('game.moves.prev.length'),
  players,
  (moveCount, players) => moveCount % players + 1
);
