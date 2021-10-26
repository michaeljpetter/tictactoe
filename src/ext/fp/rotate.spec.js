import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import rotate from './rotate';

subject(({ n, array }) => rotate(n)(array));

set('array', [2, 4, 6, 8, 10]);

describe('when n is zero', () => {
  set('n', 0);

  it('does nothing', ({ array }) => expect.it.toEqual(array));
});

describe('when array is empty', () => {
  set('n', 5);
  set('array', [])

  it('does nothing', () => expect.it.toEqual([]));
});

describe.each([
  [1, [10, 2, 4, 6, 8]],
  [3, [6, 8, 10, 2, 4]],
  [14, [4, 6, 8, 10, 2]],
])('when n is positive', (n, expected) => {
  set.from({ n });

  it('rotates right', () => expect.it.toEqual(expected));
});

describe.each([
  [-1, [4, 6, 8, 10, 2]],
  [-3, [8, 10, 2, 4, 6]],
  [-14, [10, 2, 4, 6, 8]]
])('when n is negative', (n, expected) => {
  set.from({ n });

  it('rotates left', () => expect.it.toEqual(expected));
});
