import { boardToMoves, createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import squares from './squares';

subject(({ dim, toWin, players, board }) =>
  squares({
    config: { dim, toWin, players },
    game: { moves: boardToMoves(board) }
  })
);

describe.each((_ => [
  [
    {
      dim: [3, 3], toWin: 3, players: 2,
      board: `
        |O|X| |
        | |X|O|
        | |O|X|
      `
    },
    [
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
  ],
  [
    {
      dim: [4, 5], toWin: 4, players: 4,
      board: `
        | |O|^|@|
        |O|X|@|^|
        |^|O|X| |
        | |^|O|X|
        |X|@| | |
      `
    },
    [
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
  ],
  [
    {
      dim: [3, 4], toWin: 3, players: 2,
      board: `
        |O|X| |
        | |X|O|
        |X|O|X|
        |O| | |
      `
    },
    [
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
  ],
  [
    {
      dim: [5, 5], toWin: 3, players: 2,
      board: `
        |X|O|O| |X|
        | |X|O|X|X|
        |O|O|X| |O|
        |X|X|O|X|O|
        |X|O|O| |X|
      `
    },
    [
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
  ],
  [
    {
      dim: [3, 3], toWin: 3, players: 2,
      board: `
        |O|X|O|
        | |X| |
        |X|O|X|
      `
    },
    [
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
  ],
])())('case %p', (values, expected) => {
  set.from(values);

  it('yields expected squares', () => expect.it.toStrictEqual(expected));
});
