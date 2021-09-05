import pretty from 'pretty-format';
import { flatten, flow, join, map, zip } from 'lodash/fp';

export default (strings, ...values) =>
  flow(
    map(v => pretty(v, { min: true })),
    zip(strings),
    flatten,
    join('')
  )(values);
