export const createRenderer = renderers =>
  parts => parts.map((part, i) => {
    if(typeof(part) !== 'object')
      return part;
    const [key, value] = Object.entries(part)[0];
    return renderers[key](i, value);
  });
