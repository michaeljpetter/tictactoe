import { combineEpics } from 'redux-observable';
import changeDim from './change_dim';
import lockDim from './lock_dim';

export default combineEpics(
  changeDim,
  lockDim
);
