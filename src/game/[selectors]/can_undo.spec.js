import canUndo from './can_undo';
import { once } from 'lodash/fp';

let prev;
let subject;

beforeEach(() => {
  prev = undefined;

  subject = once(() => canUndo({ game: { moves: { prev } } }));
});

describe('when there are no prev moves', () => {
  beforeEach(() => {
    prev = [];
  });

  it('is false', () => {
    expect(subject()).toBe(false);
  });
});

describe('when there are prev moves', () => {
  beforeEach(() => {
    prev = [6];
  });

  it('is true', () => {
    expect(subject()).toBe(true);
  });
});
