import { curry } from 'lodash/fp';

export default curry((step, start, end) => {
  if(process.env.NODE_ENV !== 'production') {
    if(!(0 <= (end - start) / step))
      throw new Error(`step '${step}' is invalid for range [${start}, ${end}]`);
  }

  if(start === end)
    return [start];

  let value = start;
  const more = start <= end ? () => value <= end : () => end <= value;

  const array = [];
  let i = 0;
  while(more()) {
    array[i++] = value;
    value += step;
  }
  return array;
});
