import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import divRem from './div_rem';

subject(({ args }) => divRem(...args));

describe.each([
  [[3, 4], [0, 3]],
  [[4.5, 2], [2, .5]],
  [[21, 7], [3, 0]]
])('case %j', (args, expected) => {
  set.from({ args });

  it('yields expected dividend and remainder', () => expect.it.toStrictEqual(expected));
});
