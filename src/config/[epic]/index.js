import { combineEpics } from 'redux-observable';
import lockDim from './lock_dim';

export default combineEpics(
  lockDim
);
