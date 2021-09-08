import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import splitKeys from './split_keys';

subject(({ object }) => splitKeys(object));

describe('when the object has no key lists', () => {
  set('object', { type: 'circle', radius: 2 });

  it('is unchanged', ({ object }) => expect.it.toStrictEqual(object));
});

describe('when the object has key lists', () => {
  set('object', { [['type', 'name']]: 'circle', radius: 2 });

  it('splits the keys', () => expect.it.toStrictEqual({ type: 'circle', name: 'circle', radius: 2 }));

  describe.each([
    [(_, circle) => ({ ...circle, type: 'square' }), { type: 'square' }],
    [(_, circle) => ({ type: 'square', ...circle }), { type: 'circle' }]
  ])('when a list key duplicates a plain key', (object, expected) => {
    set.from({ object });

    it('yields the last value', () => expect.it.toEqual(expect.objectContaining(expected)));
  });
});
