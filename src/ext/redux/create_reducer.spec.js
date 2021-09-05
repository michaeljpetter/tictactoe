import createReducer from './create_reducer';
import { createFixture, expect, p } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();

subject(() => createReducer(0, {
  [['PLUS', 'ADD']]: (state, { payload }) => state + payload,
  SUBTRACT: (state, { payload }) => state - payload
}));

describe('when invoked', () => {
  subject(({ state, action }, reducer) => reducer(state, action));

  [
    { state: undefined, action: { type: 'PLUS', payload: 7 }, expected: 7 },
    { state: undefined, action: { type: 'ADD', payload: 7 }, expected: 7 },
    { state: undefined, action: { type: 'SUBTRACT', payload: 8 }, expected: -8 },
    { state: undefined, action: { type: 'OTHER' }, expected: 0 },

    { state: 20, action: { type: 'PLUS', payload: 7 }, expected: 27 },
    { state: 20, action: { type: 'ADD', payload: 7 }, expected: 27 },
    { state: 20, action: { type: 'SUBTRACT', payload: 8 }, expected: 12 },
    { state: 20, action: { type: 'OTHER' }, expected: 20 },
  ].
  forEach(({ expected, ...c }) => {
    describe(p`case ${c}`, () => {
      set.from(c);

      it('equals expected', () => expect.it.toEqual(expected));
    });
  });
});
