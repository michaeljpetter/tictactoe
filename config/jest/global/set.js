import { T, cond, constant, isFunction, once } from 'lodash/fp';

const makeGet = cond([[isFunction, once], [T, constant]]);

export default (name, value) => {
  beforeEach(() => {
    Object.defineProperty(global, name, { configurable: true, get: makeGet(value) });
  });

  afterEach(() => {
    delete global[name];
  });
};
