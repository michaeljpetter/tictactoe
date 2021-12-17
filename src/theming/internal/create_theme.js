import { unflatten } from 'flat';
import emptyTheme from './empty_theme';
import { flow, isPlainObject, merge } from 'lodash/fp';

const parentKey = Symbol();

const handler = {
  get: (target, propertyKey, receiver) => {
    if(process.env.NODE_ENV !== 'production') {
      if(propertyKey === parentKey)
        throw new Error('invalid access of internal parentKey');
    }

    if(!Reflect.has(target, propertyKey))
      return target[parentKey]?.[propertyKey];

    const value = Reflect.get(target, propertyKey, receiver);
    if(!isPlainObject(value))
      return value;

    return new Proxy({ ...value, [parentKey]: receiver }, handler);
  },
  set: () => {
    throw new Error('theme is immutable');
  },
  ownKeys: Object.getOwnPropertyNames
};

export default flow(
  unflatten,
  merge(unflatten(emptyTheme)),
  values => new Proxy(values, handler)
);
