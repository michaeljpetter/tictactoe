import playersOptions from './players_options';

subject(() => playersOptions({ config: { dim, toWin } }));

[
  { dim: [3, 3], toWin: 3, expected: [2, 3] },
  { dim: [3, 4], toWin: 3, expected: [2, 3, 4] },
  { dim: [3, 4], toWin: 4, expected: [2, 3] },
  { dim: [5, 5], toWin: 3, expected: [2, 3, 4] }
].
forEach(({ expected, ...c }) => {
  describe(p`case ${c}`, () => {
    set.from(c);

    it('equals expected', () => expect.it.toEqual(expected));
  });
});
