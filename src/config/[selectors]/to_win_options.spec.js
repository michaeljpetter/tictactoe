import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import toWinOptions from './to_win_options';

subject(({ dim }) => toWinOptions({ config: { dim } }));

describe.each([
  [[4, 3], [3]],
  [[4, 7], [3, 4]],
  [[9, 5], [3, 4, 5]],
])(`case %j`, (dim, expected) => {
  set.from({ dim });

  it('yields expected options', () => expect.it.toEqual(expected));
});
