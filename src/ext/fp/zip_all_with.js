import { curry } from 'lodash/fp';
import { flow, map, spread, zipAll } from 'lodash/fp';

export default curry((iteratee, arrays) =>
  flow(zipAll, map(spread(iteratee)))(arrays)
);
