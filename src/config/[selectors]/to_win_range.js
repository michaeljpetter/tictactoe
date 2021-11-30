import { createSelector } from 'reselect';
import dim from './dim';

export default createSelector(
  dim,
  dim => [3, Math.min(...dim)]
);
