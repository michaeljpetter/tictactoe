import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import playersOptions from './players_options';

subject(({ dim, toWin }) => playersOptions({ config: { dim, toWin } }));

describe.each([
  [{ dim: [3, 3], toWin: 3 }, [2, 3]],
  [{ dim: [3, 4], toWin: 3 }, [2, 3, 4]],
  [{ dim: [3, 4], toWin: 4 }, [2, 3]],
  [{ dim: [5, 5], toWin: 3 }, [2, 3, 4]]
])('case %j', (values, expected) => {
  set.from(values);

  it('yields expected options', () => expect.it.toEqual(expected));
});
