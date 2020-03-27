import { flow, cond, has, invokeArgs, constant, T } from 'lodash/fp';
import splitKeys from './split_keys';

export default (defaultState, handlers) => {
  const plainHandlers = flow( //eslint-disable-line lodash-fp/no-single-composition
    splitKeys
  )(handlers);

  return (state = defaultState, action) => cond([
    [has(action.type), invokeArgs(action.type, [state, action])],
    [T, constant(state)]
  ])(plainHandlers);
};
