import { curry } from 'lodash/fp';

export default curry((predicate, object) =>
  Object.entries(object).reduce(
    (acc, [key, value]) =>
      (acc[+!predicate(key)][key] = value, acc),
    [{}, {}]
  )
);
