import { flow, split, reduce, flip, set, mergeAll, __ } from 'lodash/fp';
import { map } from '#/ext/lodash/fp/uncapped';

export default flow(
  map((v, k) =>
    flow(
      split(','),
      reduce(flip(set(__, v)), {})
    )(k)
  ),
  mergeAll
);
