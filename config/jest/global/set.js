const makeGet = value => {
  let result = value;
  return () => {
    if(typeof value === 'function') {
      result = value();
      value = undefined;
    }
    return result;
  };
};

const set = (name, value) => {
  beforeEach(() => {
    Object.defineProperty(global, name, { configurable: true, get: makeGet(value) });
  });

  afterEach(() => {
    delete global[name];
  });
};

set.from = obj => Object.entries(obj).forEach(e => set(...e));

export default set;
