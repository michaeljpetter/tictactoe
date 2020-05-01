import set from './set';

const subject = value => {
  set('subject', value);

  beforeEach(() => {
    Object.defineProperty(expect, 'it', { configurable: true, get: () => expect(global.subject) });
  });

  afterEach(() => {
    delete expect.it;
  });
};

export default subject;
