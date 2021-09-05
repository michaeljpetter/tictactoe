import { beforeEach } from '@jest/globals';

export default (ctx, fn, ...args) => beforeEach(() => fn(ctx), ...args);
