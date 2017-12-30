export const createRenderer = renderers =>
  status => status.map((el, i) => {
    if(typeof(el) !== 'object')
      return el;
    const key = Object.keys(el)[0];
    return renderers[key](i, el[key]);
  });
