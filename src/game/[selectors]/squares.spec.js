import { boardToMoves, createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import squares from './squares';

subject(({ dim, toWin, players, ai, board, heatShown }) =>
  squares({
    config: { dim, toWin, players, ai },
    game: { moves: boardToMoves(board), heatShown }
  })
);

set('ai', ({ players }) => Array(players).fill(false));
set('heatShown', true);

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
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: false, heat: null },
      { player: _, canMakeMove: true, isWin: false, heat: expect.any(Number) },

      { player: _, canMakeMove: true, isWin: false, heat: expect.any(Number) },
      { player: 0, canMakeMove: false, isWin: false, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },

      { player: _, canMakeMove: true, isWin: false, heat: expect.any(Number) },
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: false, heat: null }
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
      { player: _, canMakeMove: true, isWin: false, heat: expect.any(Number) },
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 2, canMakeMove: false, isWin: false, heat: null },
      { player: 3, canMakeMove: false, isWin: false, heat: null },

      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: false, heat: null },
      { player: 3, canMakeMove: false, isWin: false, heat: null },
      { player: 2, canMakeMove: false, isWin: false, heat: null },

      { player: 2, canMakeMove: false, isWin: false, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: false, heat: null },
      { player: _, canMakeMove: true, isWin: false, heat: expect.any(Number) },

      { player: _, canMakeMove: true, isWin: false, heat: expect.any(Number) },
      { player: 2, canMakeMove: false, isWin: false, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: false, heat: null },

      { player: 0, canMakeMove: false, isWin: false, heat: null },
      { player: 3, canMakeMove: false, isWin: false, heat: null },
      { player: _, canMakeMove: true, isWin: false, heat: expect.any(Number) },
      { player: _, canMakeMove: true, isWin: false, heat: expect.any(Number) }
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
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: false, heat: null },
      { player: _, canMakeMove: false, isWin: false, heat: null },

      { player: _, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: false, heat: null },
      { player: 1, canMakeMove: false, isWin: true, heat: null },

      { player: 0, canMakeMove: false, isWin: false, heat: null },
      { player: 1, canMakeMove: false, isWin: true, heat: null },
      { player: 0, canMakeMove: false, isWin: false, heat: null },

      { player: 1, canMakeMove: false, isWin: true, heat: null },
      { player: _, canMakeMove: false, isWin: false, heat: null },
      { player: _, canMakeMove: false, isWin: false, heat: null }
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
      { player: 0, canMakeMove: false, isWin: true, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: _, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: true, heat: null },

      { player: _, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: true, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: true, heat: null },
      { player: 0, canMakeMove: false, isWin: false, heat: null },

      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: true, heat: null },
      { player: _, canMakeMove: false, isWin: false, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },

      { player: 0, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: true, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: true, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },

      { player: 0, canMakeMove: false, isWin: true, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: _, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: true, heat: null }
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
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: false, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },

      { player: _, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: false, heat: null },
      { player: _, canMakeMove: false, isWin: false, heat: null },

      { player: 0, canMakeMove: false, isWin: false, heat: null },
      { player: 1, canMakeMove: false, isWin: false, heat: null },
      { player: 0, canMakeMove: false, isWin: false, heat: null }
    ]
  ]
])(null))('case %p', (values, expected) => {
  set.from(values);

  it('yields expected squares', () => expect.it.toStrictEqual(expected));
});

describe('when the current player is AI', () => {
  set.from({
    dim: [3, 3], toWin: 3, players: 2,
    ai: [false, true],
    board: `
      | | | |
      | |X| |
      | |O|X|
    `
  });

  it('disallows all moves', () => expect.it.not.toEqual(
    expect.arrayContaining([expect.objectContaining({ canMakeMove: true })])
  ));
});

describe('when heat is not shown', () => {
  set.from({
    dim: [3, 3], toWin: 3, players: 2,
    heatShown: false,
    board: `
      | | | |
      | |X| |
      | |O|X|
    `
  });

  it('yields null heat for all squares', () => expect.it.not.toEqual(
    expect.arrayContaining([expect.objectContaining({ heat: expect.any(Number) })])
  ));
});