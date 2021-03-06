import divRem from './div_rem';

subject(() => divRem(...args));

[
  { args: [3, 4], expected: [0, 3] },
  { args: [4.5, 2], expected: [2, .5] },
  { args: [21, 7], expected: [3, 0] },
].
forEach(({ expected, ...c }) => {
  describe(p`case ${c}`, () => {
    set.from(c);

    it('is expected', () => expect.it.toStrictEqual(expected));
  });
});
