import { boardToMoves, createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import status from './status';

subject(({ board }) =>
  status({
    config: { dim: [3, 3], toWin: 3, players: 2 },
    game: { moves: boardToMoves(board) }
  })
);

describe('when the game is in progress', () => {
  set('board', `
    |O|X| |
    | |X| |
    | |O|X|
  `);

  it("states the current player's turn", () => {
    expect.it.toEqual(["It's your turn, ", { player: 2 }]);
  });
});

describe('when a player has won', () => {
  set('board', `
    |X|O|X|
    | |X|O|
    | |O|X|
  `);

  it('states the winner', () => {
    expect.it.toEqual([{ player: 1 }, ' wins!']);
  });
});

describe('when no possible wins remain', () => {
  set('board', `
    |O| |X|
    |X|X|O|
    |O| |X|
  `);

  it('states the draw', () => {
    expect.it.toEqual(["It's a draw..."]);
  });
});
