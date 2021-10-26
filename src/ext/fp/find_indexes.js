import { curry } from 'lodash/fp';

export default curry((predicate, array) =>
  [...array.entries()]
    .filter(([, p]) => predicate(p))
    .map(([i]) => i)
);
