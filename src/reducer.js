import { combineReducers, compose } from 'redux';
import { withReset } from '#/ext/redux';
import app from '#/app/[reducer]';
import config from '#/config/[reducer]';
import game from '#/game/[reducer]';

export default compose(
  withReset('RESET'),
  combineReducers
)({
  app,
  config,
  game
});
