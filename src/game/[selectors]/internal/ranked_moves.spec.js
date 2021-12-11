import { boardToMoves, createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import rankedMoves from './ranked_moves';

subject(({ dim, toWin, players, board }) =>
  rankedMoves({
    config: { dim, toWin, players },
    game: { moves: boardToMoves(board) }
  })
);

describe.each([
  [
    {
      dim: [3, 3], toWin: 3, players: 2,
      board: `
        |X|X|O|
        |O| |O|
        |O|X|X|
      `
    },
    [
      {
        move: 4,
        reasons: {
          win: [[1, 4, 7], [0, 4, 8]]
        }
      }
    ]
  ],
  [
    {
      dim: [3, 3], toWin: 3, players: 2,
      board: `
        |X|O| |
        |X| |X|
        |O|O| |
      `
    },
    [
      {
        move: 4,
        reasons: {
          win: [[3, 4, 5]],
          block: [[1, 4, 7]],
        }
      },
      {
        move: 8,
        reasons: {
          block: [[6, 7, 8]],
          fork: [[2, 5, 8], [0, 4, 8]]
        }
      },
      {
        move: 2,
        reasons: {
          residual: [[2, 5, 8]]
        }
      }
    ]
  ],
  [
    {
      dim: [3, 3], toWin: 3, players: 2,
      board: `
        |X|O| |
        |X| | |
        |O| |X|
      `
    },
    [
      {
        move: 4,
        reasons: {
          block: [[0, 4, 8]],
          fork: [[1, 4, 7], [2, 4, 6]]
        }
      },
      {
        move: 5,
        reasons: {
          blockFork: [[3, 4, 5], [2, 5, 8]]
        }
      },
      {
        move: 2,
        reasons: {
          residual: [[2, 4, 6]]
        }
      },
      {
        move: 7,
        reasons: {
          residual: [[1, 4, 7]]
        }
      }
    ]
  ],
  [
    {
      dim: [3, 3], toWin: 3, players: 2,
      board: `
        | |X| |
        | | |O|
        |X| | |
      `
    },
    [
      {
        move: 2,
        reasons: {
          blockFork: [[0, 1, 2], [2, 4, 6]]
        }
      },
      {
        move: 4,
        reasons: {
          blockFork: [[1, 4, 7], [2, 4, 6]]
        }
      },
      {
        move: 8,
        reasons: {
          residual: [[2, 5, 8], [0, 4, 8]]
        }
      },
      {
        move: 0,
        reasons: {
          residual: [[0, 4, 8]]
        }
      },
      {
        move: 3,
        reasons: {
          residual: [[3, 4, 5]]
        }
      },
      {
        move: 7,
        reasons: {
          residual: []
        }
      }
    ]
  ],
  [
    {
      dim: [3, 3], toWin: 3, players: 2,
      board: `
        | | |X|
        | |O| |
        |X| | |
      `
    },
    [
      {
        move: 3,
        reasons: {
          blockFork: []
        }
      },
      {
        move: 5,
        reasons: {
          blockFork: []
        }
      },
      {
        move: 1,
        reasons: {
          blockFork: []
        }
      },
      {
        move: 7,
        reasons: {
          blockFork: []
        }
      },
      {
        move: 0,
        reasons: {
          residual: [[0, 4, 8]]
        }
      },
      {
        move: 8,
        reasons: {
          residual: [[0, 4, 8]]
        }
      }
    ]
  ],
  [
    {
      dim: [3, 3], toWin: 3, players: 2,
      board: `
        | | | |
        | | |X|
        | | | |
      `
    },
    [
      {
        move: 4,
        reasons: {
          residual: [[1, 4, 7], [0, 4, 8], [2, 4, 6]]
        }
      },
      {
        move: 0,
        reasons: {
          residual: [[0, 1, 2], [0, 3, 6], [0, 4, 8]]
        }
      },
      {
        move: 6,
        reasons: {
          residual: [[6, 7, 8], [0, 3, 6], [2, 4, 6]]
        }
      },
      {
        move: 2,
        reasons: {
          residual: [[0, 1, 2], [2, 4, 6]]
        }
      },
      {
        move: 8,
        reasons: {
          residual: [[6, 7, 8], [0, 4, 8]]
        }
      },
      {
        move: 1,
        reasons: {
          residual: [[0, 1, 2], [1, 4, 7]]
        }
      },
      {
        move: 7,
        reasons: {
          residual: [[6, 7, 8], [1, 4, 7]]
        }
      },
      {
        move: 3,
        reasons: {
          residual: [[0, 3, 6]]
        }
      }
    ]
  ],
  [
    {
      dim: [3, 3], toWin: 3, players: 2,
      board: `
        | | | |
        | | | |
        | | | |
      `
    },
    [
      {
        move: 4,
        reasons: {
          residual: [[3, 4, 5], [1, 4, 7], [0, 4, 8], [2, 4, 6]]
        }
      },
      {
        move: 0,
        reasons: {
          residual: [[0, 1, 2], [0, 3, 6], [0, 4, 8]]
        }
      },
      {
        move: 2,
        reasons: {
          residual: [[0, 1, 2], [2, 5, 8], [2, 4, 6]]
        }
      },
      {
        move: 6,
        reasons: {
          residual: [[6, 7, 8], [0, 3, 6], [2, 4, 6]]
        }
      },
      {
        move: 8,
        reasons: {
          residual: [[6, 7, 8], [2, 5, 8], [0, 4, 8]]
        }
      },
      {
        move: 1,
        reasons: {
          residual: [[0, 1, 2], [1, 4, 7]]
        }
      },
      {
        move: 3,
        reasons: {
          residual: [[3, 4, 5], [0, 3, 6]]
        }
      },
      {
        move: 5,
        reasons: {
          residual: [[3, 4, 5], [2, 5, 8]]
        }
      },
      {
        move: 7,
        reasons: {
          residual: [[6, 7, 8], [1, 4, 7]]
        }
      }
    ]
  ],
  [
    {
      dim: [4, 4], toWin: 3, players: 2,
      board: `
        |O| | |O|
        | |X| | |
        | | |X| |
        |X| | |O|
      `
    },
    [
      {
        move: 6,
        reasons: {
          fork: [[4, 5, 6], [5, 6, 7], [2, 6, 10], [6, 10, 14], [6, 9, 12]]
        },
      },
      {
        move: 9,
        reasons: {
          fork: [[8, 9, 10], [9, 10, 11], [1, 5, 9], [5, 9, 13], [6, 9, 12]]
        },
      },
      {
        move: 8,
        reasons: {
          fork: [[8, 9, 10], [4, 8, 12], [2, 5, 8]]
        },
      },
      {
        move: 13,
        reasons: {
          fork: [[12, 13, 14], [5, 9, 13], [7, 10, 13]]
        }
      },
      {
        move: 4,
        reasons: {
          fork: [[4, 5, 6], [4, 8, 12]]
        },
      },
      {
        move: 14,
        reasons: {
          fork: [[12, 13, 14], [6, 10, 14]]
        }
      },
      {
        move: 7,
        reasons: {
          fork: [[5, 6, 7], [7, 10, 13]]
        }
      },
      {
        move: 2,
        reasons: {
          fork: [[2, 6, 10], [2, 5, 8]]
        }
      },
      {
        move: 11,
        reasons: {
          residual: [[9, 10, 11], [1, 6, 11]]
        }
      },
      {
        move: 1,
        reasons: {
          residual: [[1, 5, 9], [1, 6, 11]]
        }
      }
    ]
  ]
])('case %p', (values, expected) => {
  set.from(values);

  it('yields expected ranking', () => expect.it.toStrictEqual(expected));
});
