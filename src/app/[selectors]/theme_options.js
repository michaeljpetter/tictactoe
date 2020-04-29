import { createSelector } from 'reselect';
import * as themes from '#/themes';

export default createSelector(
  () => Object.keys(themes)
);
