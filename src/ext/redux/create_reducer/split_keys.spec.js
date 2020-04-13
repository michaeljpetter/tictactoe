import splitKeys from './split_keys';

subject(() => splitKeys(object));

describe('when the object has no key lists', () => {
  set('object', { type: 'circle', radius: 2 });

  it('is unchanged', () => expect.it.toStrictEqual(object));
});

describe('when the object has key lists', () => {
  set('object', { [['type', 'name']]: 'circle', radius: 2 });

  it('splits the keys', () => expect.it.toStrictEqual({ type: 'circle', name: 'circle', radius: 2 }));

  [
    { object: circle => ({ ...circle, type: 'square' }), expected: { type: 'square' } },
    { object: circle => ({ type: 'square', ...circle }), expected: { type: 'circle' } }
  ].
  forEach(({ expected, ...c }) => {
    describe('when a list key duplicates a plain key', () => {
      set.from(c);

      it('the last in wins', () => expect.it.toEqual(expect.objectContaining(expected)));
    });
  });
});
