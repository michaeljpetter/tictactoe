import { cond, has, invokeArgs, constant, T } from 'lodash/fp';

export default (defaultState, handlers) =>
  (state = defaultState, action) => cond([
    [has(action.type), invokeArgs(action.type, [state, action])],
    [T, constant(state)]
  ])(handlers);
