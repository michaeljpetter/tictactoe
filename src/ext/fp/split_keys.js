export default object =>
  Object.entries(object).reduce(
    (acc, [key, value]) =>
      (key.split(',').forEach(k => acc[k] = value), acc),
    {}
  );
