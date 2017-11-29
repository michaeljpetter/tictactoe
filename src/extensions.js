Object.defineProperty(Object.prototype, 'tap', {
  value: function(fn) {
    const result = fn.call(null, this);
    return result === undefined ? this : result;
  },
  enumerable: false
});

Object.defineProperty(Array.prototype, 'cycle', {
  value: function*(n) {
    while(!(--n < 0))
      for(const el of this)
        yield el;
  },
  enumerable: false
});

Object.defineProperty(Number.prototype, 'times', {
  value: function(fn) {
    const _this = this;
    if(fn === undefined)
      return (function*() {
        for(let i = 0; i < _this; ++i)
          yield i;
      })();

    for(let i = 0; i < _this; ++i)
      fn(i);
  },
  enumerable: false
});
