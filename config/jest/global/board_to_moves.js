import { concat, flatten, flow, fromPairs, groupBy, initial, last, map, omit, orderBy, over, pull, slice, split, toPairs, trim, values, zip, zipAll } from 'lodash/fp';

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
