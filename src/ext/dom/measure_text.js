import { curry } from 'lodash/fp';

export default curry((font, text) => {
  const context = document.createElement('canvas').getContext('2d');
  context.font = font;
  return context.measureText(text);
});
