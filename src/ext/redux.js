export const createReducer = (defaultState, handlers) =>
  (state = defaultState, action) =>
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;
