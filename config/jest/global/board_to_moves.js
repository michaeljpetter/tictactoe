import { T, concat, cond, flatMap, flatten, flow, fromPairs, groupBy, identity, initial, isString, last, map, mapValues, omit, over, pull, shuffle, slice, sortBy, split, toPairs, trim, zip, zipAll } from 'lodash/fp';

export default flow(
  cond([
    [isString, flow(
      split('\n'),
      flatMap(flow(split('|'), slice(1, -1))),
      map(p => ({ X: 1, O: 2 })[p] || p)
    )],
    [T, identity]
  ]),
  toPairs,
  shuffle,
  map(([i, p]) => [Number(i), trim(p)]),
  groupBy(([, p]) => p),
  omit(''),
  mapValues(map(([i]) => i)),
  toPairs,
  sortBy(([p]) => p),
  map(([, m]) => m),
  zipAll,
  flatten,
  pull(undefined),
  concat(null),
  over([initial, last]),
  zip(['prev', 'current']),
  fromPairs
);
