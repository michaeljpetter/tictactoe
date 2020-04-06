import canMakeMove from './can_make_move';
import { once } from 'lodash/fp';

let board;
let index;
let subject;

beforeEach(() => {
  board = `
    |O|X| |
    | |X|O|
    |X| | |
  `;
  index = undefined;

  subject = once(() =>
    canMakeMove({
      config: { dim: [3, 3], toWin: 3, players: 2 },
      game: { moves: boardToMoves(board) }
    })(index)
  );
});

describe('when the square is occupied', () => {
  beforeEach(() => {
    index = 4;
  });

  it('is false', () => {
    expect(subject()).toBe(false);
  });
});

describe('when the square is empty', () => {
  beforeEach(() => {
    index = 8;
  });

  it('is true', () => {
    expect(subject()).toBe(true);
  });

  describe('when the game is over', () => {
    beforeEach(() => {
      board = `
        |O| |X|
        | |X|O|
        |X| | |
      `;
    });

    it('is false', () => {
      expect(subject()).toBe(false);
    });
  });
});
