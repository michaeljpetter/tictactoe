import { combineEpics } from 'redux-observable';
import ai from './ai';

export default combineEpics(
  ai
);
