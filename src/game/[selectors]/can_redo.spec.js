import canRedo from './can_redo';
import { once } from 'lodash/fp';

let next;
let subject;

beforeEach(() => {
  next = undefined;

  subject = once(() => canRedo({ game: { moves: { next } } }));
});

describe('when there are no next moves', () => {
  beforeEach(() => {
    next = [];
  });

  it('is false', () => {
    expect(subject()).toBe(false);
  });
});

describe('when there are next moves', () => {
  beforeEach(() => {
    next = [6];
  });

  it('is true', () => {
    expect(subject()).toBe(true);
  });
});
