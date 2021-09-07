import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import createReducer from './create_reducer';

subject(() => createReducer(0, {
  [['PLUS', 'ADD']]: (state, { payload }) => state + payload,
  SUBTRACT: (state, { payload }) => state - payload
}));

describe('when invoked', () => {
  subject(({ state, action }, reducer) => reducer(state, action));

  describe.each([
    [{ action: { type: 'PLUS', payload: 7 } }, 7],
    [{ action: { type: 'ADD', payload: 7 } }, 7],
    [{ action: { type: 'SUBTRACT', payload: 8 } }, -8],
    [{ action: { type: 'OTHER' } }, 0],

    [{ state: 20, action: { type: 'PLUS', payload: 7 } }, 27],
    [{ state: 20, action: { type: 'ADD', payload: 7 } }, 27],
    [{ state: 20, action: { type: 'SUBTRACT', payload: 8 } }, 12],
    [{ state: 20, action: { type: 'OTHER' } }, 20],
  ])('case %j', (values, expected) => {
    set.from(values);

    it('yields expected value', () => expect.it.toEqual(expected));
  });
});
