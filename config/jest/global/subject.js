import set from './set';

export default value => {
  set('subject', value);

  beforeEach(() => {
    Object.defineProperty(expect, 'it', { configurable: true, get: () => expect(subject) });
  });

  afterEach(() => {
    delete expect.it;
  });
};
