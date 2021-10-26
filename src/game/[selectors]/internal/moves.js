import { createSelector } from 'reselect';

export default createSelector(
  ({ game }) => game.moves,
  ({ prev, current }) => [...prev, current].slice(1)
);
