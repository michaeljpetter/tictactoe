import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import toWinRange from './to_win_range';

subject(({ dim }) => toWinRange({ config: { dim } }));

describe.each([
  [[4, 3], [3, 3]],
  [[4, 7], [3, 4]],
  [[9, 5], [3, 5]]
])(`case %j`, (dim, expected) => {
  set.from({ dim });

  it('yields expected range', () => expect.it.toEqual(expected));
});
