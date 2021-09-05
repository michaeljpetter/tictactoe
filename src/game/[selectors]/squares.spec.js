import squares from './squares';
import { omit } from 'lodash/fp';
import { boardToMoves, createFixture, expect, p } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();

subject(({ dim, toWin, players, board }) =>
  squares({
    config: { dim, toWin, players },
    game: { moves: boardToMoves(board) }
  })
);

(_ => [
  {
    dim: [3, 3], toWin: 3, players: 2,
    board: `
      |O|X| |
      | |X|O|
      | |O|X|
    `,
    expected: [
      { player: 2, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: false },
      { player: _, canMakeMove: true, isWin: false },

      { player: _, canMakeMove: true, isWin: false },
      { player: 1, canMakeMove: false, isWin: false },
      { player: 2, canMakeMove: false, isWin: false },

      { player: _, canMakeMove: true, isWin: false },
      { player: 2, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: false }
    ]
  },
  {
    dim: [4, 5], toWin: 4, players: 4,
    board: `
      | |O|^|@|
      |O|X|@|^|
      |^|O|X| |
      | |^|O|X|
      |X|@| | |
    `,
    expected: [
      { player: _, canMakeMove: true, isWin: false },
      { player: 2, canMakeMove: false, isWin: false },
      { player: 3, canMakeMove: false, isWin: false },
      { player: 4, canMakeMove: false, isWin: false },

      { player: 2, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: false },
      { player: 4, canMakeMove: false, isWin: false },
      { player: 3, canMakeMove: false, isWin: false },

      { player: 3, canMakeMove: false, isWin: false },
      { player: 2, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: false },
      { player: _, canMakeMove: true, isWin: false },

      { player: _, canMakeMove: true, isWin: false },
      { player: 3, canMakeMove: false, isWin: false },
      { player: 2, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: false },

      { player: 1, canMakeMove: false, isWin: false },
      { player: 4, canMakeMove: false, isWin: false },
      { player: _, canMakeMove: true, isWin: false },
      { player: _, canMakeMove: true, isWin: false }
    ]
  },
  {
    dim: [3, 4], toWin: 3, players: 2,
    board: `
      |O|X| |
      | |X|O|
      |X|O|X|
      |O| | |
    `,
    expected: [
      { player: 2, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: false },
      { player: _, canMakeMove: false, isWin: false },

      { player: _, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: false },
      { player: 2, canMakeMove: false, isWin: true },

      { player: 1, canMakeMove: false, isWin: false },
      { player: 2, canMakeMove: false, isWin: true },
      { player: 1, canMakeMove: false, isWin: false },

      { player: 2, canMakeMove: false, isWin: true },
      { player: _, canMakeMove: false, isWin: false },
      { player: _, canMakeMove: false, isWin: false }
    ]
  },
  {
    dim: [5, 5], toWin: 3, players: 2,
    board: `
      |X|O|O| |X|
      | |X|O|X|X|
      |O|O|X| |O|
      |X|X|O|X|O|
      |X|O|O| |X|
    `,
    expected: [
      { player: 1, canMakeMove: false, isWin: true },
      { player: 2, canMakeMove: false, isWin: false },
      { player: 2, canMakeMove: false, isWin: false },
      { player: _, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: true },

      { player: _, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: true },
      { player: 2, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: true },
      { player: 1, canMakeMove: false, isWin: false },

      { player: 2, canMakeMove: false, isWin: false },
      { player: 2, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: true },
      { player: _, canMakeMove: false, isWin: false },
      { player: 2, canMakeMove: false, isWin: false },

      { player: 1, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: true },
      { player: 2, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: true },
      { player: 2, canMakeMove: false, isWin: false },

      { player: 1, canMakeMove: false, isWin: true },
      { player: 2, canMakeMove: false, isWin: false },
      { player: 2, canMakeMove: false, isWin: false },
      { player: _, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: true }
    ]
  },
  {
    dim: [3, 3], toWin: 3, players: 2,
    board: `
      |O|X|O|
      | |X| |
      |X|O|X|
    `,
    expected: [
      { player: 2, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: false },
      { player: 2, canMakeMove: false, isWin: false },

      { player: _, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: false },
      { player: _, canMakeMove: false, isWin: false },

      { player: 1, canMakeMove: false, isWin: false },
      { player: 2, canMakeMove: false, isWin: false },
      { player: 1, canMakeMove: false, isWin: false }
    ]
  }
])().
forEach(({ expected, ...c }) => {
  describe(p`case ${omit('dim', c)}`, () => {
    set.from(c);

    it('is expected', () => expect.it.toStrictEqual(expected));
  });
});
