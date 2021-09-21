export default obj =>
  Object.entries(obj).reduce(
    (acc, [key, value]) =>
      (key.split(',').forEach(k => acc[k] = value), acc),
    {}
  );
