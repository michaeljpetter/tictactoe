import splitKeys from './split_keys';
import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();

subject(({ object }) => splitKeys(object));

describe('when the object has no key lists', () => {
  set('object', { type: 'circle', radius: 2 });

  it('is unchanged', ({ object }) => expect.it.toStrictEqual(object));
});

describe('when the object has key lists', () => {
  set('object', { [['type', 'name']]: 'circle', radius: 2 });

  it('splits the keys', () => expect.it.toStrictEqual({ type: 'circle', name: 'circle', radius: 2 }));

  [
    { object: (_, circle) => ({ ...circle, type: 'square' }), expected: { type: 'square' } },
    { object: (_, circle) => ({ type: 'square', ...circle }), expected: { type: 'circle' } }
  ].
  forEach(({ expected, ...c }) => {
    describe('when a list key duplicates a plain key', () => {
      set.from(c);

      it('the last in wins', () => expect.it.toEqual(expect.objectContaining(expected)));
    });
  });
});
