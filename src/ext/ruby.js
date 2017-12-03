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
    return (0).upto(this - 1, fn);
  },
  enumerable: false
});

Object.defineProperty(Number.prototype, 'upto', {
  value: function(n, fn) {
    const _this = this;
    if(fn === undefined)
      return (function*() {
        for(let i = _this; i <= n; ++i)
          yield i;
      })();

    for(let i = _this; i <= n; ++i)
      fn(i);
  },
  enumerable: false
});
