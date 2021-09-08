import { createFixture, expect, jest } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import withHistory from './with_history';

subject(({ actionTypes, inner }) => withHistory(actionTypes)(inner));

set('actionTypes', { ignoreMe: 'BOGUS' });
set('inner', () => jest.fn(() => 'new'));

describe('when invoked', () => {
  subject(({ state, action }, reducer) => reducer(state, action));

  set('state', { prev: [1, 2], current: 3, next: [4, 5] });

  describe.each([
    ['first', { prev: [], current: 1, next: [2, 3, 4, 5] }],
    ['prev', { prev: [1], current: 2, next: [3, 4, 5] }],
    ['next', { prev: [1, 2, 3], current: 4, next: [5] }],
    ['last', { prev: [1, 2, 3, 4], current: 5, next: [] }]
  ])('when a %s action', (type, expected) => {
    set('actionTypes', (_, types) => ({ ...types, [type]: 'LEGIT' }));
    set('action', { type: 'LEGIT' });

    it('shifts history', ({ inner }) => {
      expect.it.toStrictEqual(expected);
      expect(inner).not.toHaveBeenCalled();
    });
  });

  describe('when not a history action', () => {
    set('action', { type: 'BOGUS' });

    it('appends to history and clears next', ({ inner, action }) => {
      expect.it.toStrictEqual({ prev: [1, 2, 3], current: 'new', next: [] });
      expect(inner).toHaveBeenCalledWith(3, action);
    });

    describe('when uninitialized', () => {
      set('state', undefined);

      it('initializes history', ({ inner, action }) => {
        expect.it.toStrictEqual({ prev: [], current: 'new', next: [] });
        expect(inner).toHaveBeenCalledWith(undefined, action);
      });
    });

    describe('when inner yields the same state', () => {
      set('state', (_, state) => ({ ...state, current: 'new' }));

      it('is unchanged', ({ state, inner, action }) => {
        expect.it.toBe(state);
        expect(inner).toHaveBeenCalledWith('new', action);
      });
    });
  });
});
