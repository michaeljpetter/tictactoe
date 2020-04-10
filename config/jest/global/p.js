import pretty from 'pretty-format';
import { flatten, flow, join, map, partialRight, zip } from 'lodash/fp';

export default (strings, ...values) =>
  flow(
    map(partialRight(pretty, [{ min: true }])),
    zip(strings),
    flatten,
    join('')
  )(values);
