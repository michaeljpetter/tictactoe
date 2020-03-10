import { createElement } from 'react';
import { curry, cond, isPlainObject, T, identity } from 'lodash/fp';
import { map } from '@ext/lodash/fp/uncapped';

const renderObject = curry((components, object, i) => map(
  (value, key) => createElement(
    components[key],
    { key: `${i}.${key}`, value }
  ),
  object
));

export default components =>
  map(cond([
    [isPlainObject, renderObject(components)],
    [T, identity]
  ]));
