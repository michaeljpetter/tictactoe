import { flow, has } from 'lodash/fp';
import splitKeys from './split_keys';

export default (defaultState, handlers) => {
  const plainHandlers = flow( //eslint-disable-line lodash-fp/no-single-composition
    splitKeys
  )(handlers);

  return (state = defaultState, action) =>
    has(action.type, plainHandlers)
      ? plainHandlers[action.type](state, action)
      : state;
};
