import canUndo from './can_undo';

subject(() =>
  canUndo({ game: { moves: { prev } } })
);

describe('when there are no prev moves', () => {
  set('prev', []);

  it('is false', () => {
    expect.it.toBe(false);
  });
});

describe('when there are prev moves', () => {
  set('prev', [6]);

  it('is true', () => {
    expect.it.toBe(true);
  });
});
