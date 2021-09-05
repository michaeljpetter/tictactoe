import { test as _test } from '@jest/globals';

export default (ctx, name, fn, ...args) => _test(name, (...args) => fn(ctx, ...args), ...args);
