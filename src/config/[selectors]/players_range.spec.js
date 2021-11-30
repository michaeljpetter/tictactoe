import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import playersRange from './players_range';

subject(({ dim, toWin }) => playersRange({ config: { dim, toWin } }));

describe.each([
  [{ dim: [3, 3], toWin: 3 }, [2, 3]],
  [{ dim: [3, 4], toWin: 3 }, [2, 4]],
  [{ dim: [3, 4], toWin: 4 }, [2, 3]],
  [{ dim: [5, 5], toWin: 3 }, [2, 4]]
])('case %j', (values, expected) => {
  set.from(values);

  it('yields expected range', () => expect.it.toEqual(expected));
});
