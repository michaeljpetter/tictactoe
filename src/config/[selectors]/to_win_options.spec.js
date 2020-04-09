import toWinOptions from './to_win_options';

subject(() =>
  toWinOptions({ config: { dim } })
);

[
  { dim: [4, 3], expected: [3] },
  { dim: [4, 7], expected: [3, 4] },
  { dim: [9, 5], expected: [3, 4, 5] }
].forEach(({ expected, ...c }) => {
  describe(`case ${JSON.stringify(c)}`, () => {
    set('dim', c.dim);

    it(`is ${JSON.stringify(expected)}`, () => {
      expect.it.toEqual(expected);
    });
  });
});
