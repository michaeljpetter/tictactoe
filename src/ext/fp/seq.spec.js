import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import seq from './seq';

subject(({ start, end }) => seq(start, end));

set('start', 2);

describe('when end is greater than start', () => {
  set('end', 5);

  it('steps up by 1', () => expect.it.toEqual([2, 3, 4, 5]));
});

describe('when end is less than start', () => {
  set('end', -1);

  it('steps down by 1', () => expect.it.toEqual([2, 1, 0, -1]));
});

describe('when end is equal to start', () => {
  set('end', 2);

  it('yields a single element', () => expect.it.toEqual([2]));
});
