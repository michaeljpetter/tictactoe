import { createSelector } from 'reselect';
import { get } from 'lodash/fp';

export default createSelector(
  get('game.moves'),
  ({ prev, current }) => [...prev, current].slice(1)
);
