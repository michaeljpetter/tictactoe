import { createElement } from 'react';
import { T, cond, identity, isPlainObject } from 'lodash/fp';

const renderObject = components =>
  (object, i) => Object.entries(object).map(
    ([key, value]) => createElement(
      components[key],
      { key: `${i}.${key}`, value }
    ),
  );

export default components =>
  items => items.map(cond([
    [isPlainObject, renderObject(components)],
    [T, identity]
  ]));
