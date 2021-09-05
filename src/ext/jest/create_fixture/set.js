import { afterEach, beforeEach } from '@jest/globals';

const createGet = (ctx, prevGet, value) => {
  let result = value;
  return () => {
    if(typeof value === 'function') {
      result = 1 < value.length ? value(ctx, prevGet && prevGet()) : value(ctx);
      value = undefined;
    }
    return result;
  };
};

const set = (ctx, name, value) => {
  beforeEach(() => {
    const get = createGet(ctx, Object.getOwnPropertyDescriptor(ctx, name)?.get, value);
    Object.defineProperty(ctx, name, { configurable: true, get });
  });

  afterEach(() => {
    delete ctx[name];
  });
};

set.from = (ctx, obj) => Object.entries(obj).forEach(e => set(ctx, ...e));

export default set;
