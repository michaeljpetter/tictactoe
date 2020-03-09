export default (defaultState, handlers) =>
  (state = defaultState, action) =>
    Object.prototype.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state;
