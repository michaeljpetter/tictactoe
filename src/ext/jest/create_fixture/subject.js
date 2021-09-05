import set from './set';
import { afterEach, beforeEach, expect } from '@jest/globals';

export default (ctx, value) => {
  set(ctx, '__subject', value);

  beforeEach(() => {
    Object.defineProperty(expect, 'it', { configurable: true, get: () => expect(ctx.__subject) });
  });

  afterEach(() => {
    delete expect.it;
  });
};
