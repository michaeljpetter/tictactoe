export default class AutoMap extends Map {
  constructor(factory, iterable) {
    super(iterable);
    this.factory = factory;
  }

  get(key) {
    return super.has(key)
      ? super.get(key)
      : (value => (super.set(key, value), value))(this.factory(key));
  }
}
