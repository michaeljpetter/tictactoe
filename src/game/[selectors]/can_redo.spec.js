import canRedo from './can_redo';

subject(() =>
  canRedo({ game: { moves: { next } } })
);

describe('when there are no next moves', () => {
  set('next', []);

  it('is false', () => {
    expect.it.toBe(false);
  });
});

describe('when there are next moves', () => {
  set('next', [6]);

  it('is true', () => {
    expect.it.toBe(true);
  });
});
