import { createSelector } from 'reselect';
import { dim } from '#/config/[selectors]';
import currentPlayer from './current_player';
import rankedMoves from './ranked_moves';

export default createSelector(
  dim,
  currentPlayer,
  ({ game }) => game.heatShown,
  rankedMoves,
  ([width, height], currentPlayer, heatShown, ranks) =>
    (empty => heatShown && currentPlayer != null
      ? ranks.reduce((acc, { move }, i) => (acc[move] = i && (i / (ranks.length - 1)), acc), empty)
      : empty
    )(Array(width * height).fill(null))
);
