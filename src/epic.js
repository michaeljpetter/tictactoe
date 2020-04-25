import { combineEpics } from 'redux-observable';
import config from '#/config/[epic]';

export default combineEpics(
  config
);
