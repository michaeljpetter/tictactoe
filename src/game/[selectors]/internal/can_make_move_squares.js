import { createSelector } from "reselect";
import { ai } from '#/config/[selectors]';
import currentPlayer from "./current_player";
import playerSquares from "./player_squares";
import { F, isNil } from 'lodash/fp';

export default createSelector(
  playerSquares,
  currentPlayer,
  ai,
  (playerSquares, currentPlayer, ai) =>
    playerSquares.map(currentPlayer == null || ai[currentPlayer] ? F : isNil)
);
