import withHistory from './with_history';

subject(() => withHistory(actionTypes)(inner));

set('actionTypes', { ignoreMe: 'BOGUS' });
set('inner', () => jest.fn(() => 'new'));

describe('when invoked', () => {
  subject(reducer => reducer(state, action));

  set('state', { prev: [1, 2], current: 3, next: [4, 5] });

  [
    { type: 'first', expected: { prev: [], current: 1, next: [2, 3, 4, 5] } },
    { type: 'prev', expected: { prev: [1], current: 2, next: [3, 4, 5] } },
    { type: 'next', expected: { prev: [1, 2, 3], current: 4, next: [5] } },
    { type: 'last', expected: { prev: [1, 2, 3, 4], current: 5, next: [] } },
  ].
  forEach(({ expected, ...c }) => {
    describe(p`when a ${c.type} action`, () => {
      set('actionTypes', types => ({ ...types, [c.type]: 'LEGIT' }));
      set('action', () => ({ type: 'LEGIT' }));

      it('shifts history', () => {
        expect.it.toStrictEqual(expected);
        expect(inner).not.toHaveBeenCalled();
      });
    });
  });

  describe('when not a history action', () => {
    set('action', { type: 'BOGUS' });

    it('appends to history and clears next', () => {
      expect.it.toStrictEqual({ prev: [1, 2, 3], current: 'new', next: [] });
      expect(inner).toHaveBeenCalledWith(3, action);
    });

    describe('when uninitialized', () => {
      set('state', undefined);

      it('initializes history', () => {
        expect.it.toStrictEqual({ prev: [], current: 'new', next: [] });
        expect(inner).toHaveBeenCalledWith(undefined, action);
      });
    });

    describe('when inner yields the same state', () => {
      set('state', state => ({ ...state, current: 'new' }));

      it('is unchanged', () => {
        expect.it.toBe(state);
        expect(inner).toHaveBeenCalledWith('new', action);
      });
    });
  });
});
