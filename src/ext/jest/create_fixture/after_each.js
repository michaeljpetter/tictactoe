import { afterEach } from '@jest/globals';

export default (ctx, fn, ...args) => afterEach(() => fn(ctx), ...args);
