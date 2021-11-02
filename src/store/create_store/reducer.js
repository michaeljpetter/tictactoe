import { combineReducers } from 'redux';
import app from '#/app/[reducer]';
import config from '#/config/[reducer]';
import game from '#/game/[reducer]';

export default combineReducers({
  app,
  config,
  game
});
