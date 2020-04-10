import toWinOptions from './to_win_options';

subject(() => toWinOptions({ config: { dim } }));

[
  { dim: [4, 3], expected: [3] },
  { dim: [4, 7], expected: [3, 4] },
  { dim: [9, 5], expected: [3, 4, 5] }
].forEach(c => {
  describe(p`case ${c}`, () => {
    set.from(c);

    it('equals expected', () => expect.it.toEqual(expected));
  });
});
