import squares from './squares';
import { once } from 'lodash/fp';

let dim;
let board;
let players;
let subject;

beforeEach(() => {
  dim = undefined;
  board = undefined;
  players = undefined;

  subject = once(() =>
    squares({
      config: { dim, players },
      game: { moves: boardToMoves(board) }
    })
  );
});

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
])().forEach(c => {
  describe(`for a ${c.dim.join('x')} with ${c.players} players`, () => {
    beforeEach(() => {
      dim = c.dim;
      players = c.players;
      board = c.board;
    });

    it("has the correct players", () => {
      expect(subject()).toEqual(c.board);
    });
  });
});
