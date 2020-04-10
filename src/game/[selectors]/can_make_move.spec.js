import canMakeMove from './can_make_move';

subject(() =>
  canMakeMove({
    config: { dim: [3, 3], toWin: 3, players: 2 },
    game: { moves: boardToMoves(board) }
  })(index)
);

set('board', `
  |O|X| |
  | |X|O|
  |X| | |
`);

describe('when the square is occupied', () => {
  set('index', 4);

  it('is false', () => expect.it.toBe(false));
});

describe('when the square is empty', () => {
  set('index', 8);

  it('is true', () => expect.it.toBe(true));

  describe('when the game is over', () => {
    set('board', `
      |O| |X|
      | |X|O|
      |X| | |
    `);

    it('is false', () => expect.it.toBe(false));
  });
});
