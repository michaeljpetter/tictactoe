import { createFixture, expect, jest } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import nary from './nary';

subject(({ n, fn }) => nary(n, fn));

set('n', 2);
set('fn', () => jest.fn(() => 'result'));

it('has the given arity', ({ n }) => expect.it.toHaveLength(n));

describe('when invoked', () => {
  subject(({ args }, wrapped) => wrapped(...args));

  describe('with sufficient args', () => {
    set('args', ['uno', 2]);

    it('invokes fn with unchanged args', ({ fn }) => {
      expect.it.toEqual('result');
      expect(fn).toHaveBeenCalledWith('uno', 2);
    });
  });

  describe('with excessive args', () => {
    set('args', ['uno', 2, 3, 'catorce!']);

    it('invokes fn with capped args', ({ fn }) => {
      expect.it.toEqual('result');
      expect(fn).toHaveBeenCalledWith('uno', 2);
    });
  });

  describe('with deficient args', () => {
    set('args', ['uno']);

    it('invokes fn with padded args', ({ fn }) => {
      expect.it.toEqual('result');
      expect(fn).toHaveBeenCalledWith('uno', undefined);
    });
  });
});
