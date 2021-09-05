import { describe } from '@jest/globals';
import subject from './subject';
import set from './set';
import beforeEach from './before_each';
import afterEach from './after_each';
import it from './it';

const bind = (ctx, target) =>
  Object.entries(target)
    .reduce(
      (acc, [key, value]) => (acc[key] = bind(ctx, value), acc),
      typeof target === 'function'
        ? (...args) => target(ctx, ...args)
        : {},
    );

export default () =>
  Object.assign(
    { describe },
    bind({}, {
      subject,
      set,
      beforeEach,
      afterEach,
      it,
    })
  );
