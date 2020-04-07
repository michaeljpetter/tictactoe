import status from './status';
import { once } from 'lodash/fp';

let board;
let subject;

beforeEach(() => {
  board = undefined;

  subject = once(() =>
    status({
      config: { dim: [3, 3], toWin: 3, players: 2 },
      game: { moves: boardToMoves(board) }
    })
  );
});

describe('when the game is in progress', () => {
  beforeEach(() => {
    board = `
      |O|X| |
      | |X| |
      | |O|X|
    `;
  });

  it("states the current player's turn", () => {
    expect(subject()).toEqual(["It's your turn, ", { player: 2 }]);
  });
});

describe('when a player has won', () => {
  beforeEach(() => {
    board = `
      |X|O|X|
      | |X|O|
      | |O|X|
    `;
  });

  it('states the winner', () => {
    expect(subject()).toEqual([{ player: 1 }, ' wins!']);
  });
});

describe('when no moves remain', () => {
  beforeEach(() => {
    board = `
      |O|X|O|
      |X|O|X|
      |X|O|X|
    `;
  });

  it('states the draw', () => {
    expect(subject()).toEqual(["It's a draw..."]);
  });
});
