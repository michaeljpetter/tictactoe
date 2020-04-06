import { flow, over, map, groupBy, split, slice, flatten, toPairs, fromPairs, trim, omit, orderBy, values, zip, zipAll, concat, pull, initial, last } from 'lodash/fp';

export default flow(
  split('\n'),
  map(flow(split('|'), slice(1, -1))),
  flatten,
  toPairs,
  map(([i, p]) => [Number(i), trim(p)]),
  groupBy(([, p]) => p),
  omit(''),
  values,
  map(map(([i]) => i)),
  orderBy('length', 'desc'),
  zipAll,
  flatten,
  pull(undefined),
  concat(null),
  over([initial, last]),
  zip(['prev', 'current']),
  fromPairs
);
