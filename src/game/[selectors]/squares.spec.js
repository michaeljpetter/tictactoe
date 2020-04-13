import squares from './squares';
import { omit } from 'lodash/fp';

subject(() =>
  squares({
    config: { dim, players },
    game: { moves: boardToMoves(board) }
  })
);

(_ => [
  {
    dim: [3, 3],
    players: 2,
    board: [
      2, 1, _,
      _, 1, _,
      _, 2, 1,
    ]
  },
  {
    dim: [4, 5],
    players: 4,
    board: [
      2, 1, 3, 4,
      _, 1, 4, 3,
      3, 2, 1, _,
      _, 3, 2, 2,
      1, 4, _, _,
    ]
  }
])().
forEach(c => {
  describe(p`case ${omit('board', c)}`, () => {
    set.from(c);

    it('matches the board', () => expect.it.toStrictEqual(board));
  });
});
