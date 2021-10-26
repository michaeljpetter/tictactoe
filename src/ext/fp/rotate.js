import { curry } from 'lodash/fp';

export default curry((n, array) =>
  (a => (a.unshift(...a.splice(-n % array.length)), a))([...array])
);
