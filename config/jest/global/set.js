const makeGet = (prevGet, value) => {
  let result = value;
  return () => {
    if(typeof value === 'function') {
      result = 0 < value.length ? value(prevGet && prevGet()) : value();
      value = undefined;
    }
    return result;
  };
};

const set = (name, value) => {
  beforeEach(() => {
    const get = makeGet(Object.getOwnPropertyDescriptor(global, name)?.get, value);
    Object.defineProperty(global, name, { configurable: true, get });
  });

  afterEach(() => {
    delete global[name];
  });
};

set.from = obj => Object.entries(obj).forEach(e => set(...e));

export default set;
