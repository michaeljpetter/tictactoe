import { combineEpics } from 'redux-observable';
import config from '#/config/[epic]';
import game from '#/game/[epic]';

export default combineEpics(
  config,
  game
);
