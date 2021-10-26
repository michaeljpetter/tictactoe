import { createFixture, expect, jest } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import AutoMap from './auto_map';

set('instance', ({ factory, iterable }) => new AutoMap(factory, iterable));
set('factory', () => jest.fn(() => 'generated'));

describe('#get', () => {
  subject(({ instance, key }) => instance.get(key));

  describe.each([
    'thing',
    undefined
  ])('when the key exists', value => {
    set('iterable', [['some', value]]);
    set('key', 'some');

    it('yields the value', ({ factory }) => {
      expect.it.toEqual(value);
      expect(factory).not.toHaveBeenCalled();
    });
  });

  describe('when the key does not exist', () => {
    set('key', 77);

    it('uses the factory to generate the value', ({ instance, factory }) => {
      expect.it.toEqual('generated');
      expect(factory).toHaveBeenCalledWith(77);
      expect([...instance]).toEqual([[77, 'generated']]);
    });
  });
});
