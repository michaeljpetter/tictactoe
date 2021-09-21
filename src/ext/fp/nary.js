import { curry, flow, memoize, times } from 'lodash/fp';

export default (factory =>
  curry((n, fn) => factory(n)(fn))
)(
  memoize(flow(
    times(i => `_${i}`),
    args => new Function('fn', `return (${args}) => fn(${args});`)
  ))
);
