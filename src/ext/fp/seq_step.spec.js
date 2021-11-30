import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import seqStep from './seq_step';

subject(({ step, start, end }) => seqStep(step, start, end));

set('start', 2);

describe('when end is greater than start', () => {
  set('end', 6);

  describe.each([
    [1, [2, 3, 4, 5, 6]],
    [1.5, [2, 3.5, 5]]
  ])('when step is %d', (step, expected) => {
    set.from({ step });

    it('steps up', () => expect.it.toEqual(expected));
  });
});

describe('when end is less than start', () => {
  set('end', -2);

  describe.each([
    [-1, [2, 1, 0, -1, -2]],
    [-2, [2, 0, -2]]
  ])('when step is %d', (step, expected) => {
    set.from({ step });

    it('steps down', () => expect.it.toEqual(expected));
  });
});

describe('when end is equal to start', () => {
  set('end', 2);

  describe.each([1, -1])('when step is %d', (step) => {
    set.from({ step });

    it('yields a single element', () => expect.it.toEqual([2]));
  });
});
