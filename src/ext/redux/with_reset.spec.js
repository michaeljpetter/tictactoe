import withReset from './with_reset';
import { createFixture, expect, jest, p } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();

subject(({ inner }) => withReset('NUKE', 'BOMB')(inner));

set('inner', () => jest.fn(() => 'new'));

describe('when invoked', () => {
  subject(({ action }, reducer) => reducer('old', action));

  [
    { action: { type: 'NUKE' }, expected: undefined },
    { action: { type: 'BOMB' }, expected: undefined },
    { action: { type: 'OTHER' }, expected: 'old' },
  ].
  forEach(({ expected, ...c }) => {
    describe(p`case ${c}`, () => {
      set.from(c);

      it('invokes inner with expected state', ({ inner, action }) => {
        expect.it.toEqual('new');
        expect(inner).toHaveBeenCalledWith(expected, action);
      });
    });
  });
});
