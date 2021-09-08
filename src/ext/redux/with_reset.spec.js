import { createFixture, expect, jest } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import withReset from './with_reset';

subject(({ inner }) => withReset('NUKE', 'BOMB')(inner));

set('inner', () => jest.fn(() => 'new'));

describe('when invoked', () => {
  subject(({ action }, reducer) => reducer('old', action));

  describe.each([
    [{ type: 'NUKE' }, undefined],
    [{ type: 'BOMB' }, undefined],
    [{ type: 'OTHER' }, 'old']
  ])('case %j', (action, expected) => {
    set.from({ action });

    it('invokes inner with expected state', ({ inner, action }) => {
      expect.it.toEqual('new');
      expect(inner).toHaveBeenCalledWith(expected, action);
    });
  });
});
