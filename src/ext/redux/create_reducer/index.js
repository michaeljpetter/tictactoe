import splitKeys from './split_keys';

export default (defaultState, handlers) => {
  const plainHandlers = splitKeys(handlers);

  return (state = defaultState, action) =>
    Object.prototype.hasOwnProperty.call(plainHandlers, action.type)
      ? plainHandlers[action.type](state, action)
      : state;
};
