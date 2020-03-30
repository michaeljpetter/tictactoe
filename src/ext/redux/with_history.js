const handlers = {
  first: ({ prev, current, next }) => ({
    prev: [],
    current: prev[0],
    next: [...prev.slice(1), current, ...next]
  }),
  prev: ({ prev, current, next }) => ({
    prev: prev.slice(0, -1),
    current: prev[prev.length - 1],
    next: [current, ...next]
  }),
  next: ({ prev, current, next }) => ({
    prev: [...prev, current],
    current: next[0],
    next: next.slice(1)
  }),
  last: ({ prev, current, next }) => ({
    prev: [...prev, current, ...next.slice(0, -1)],
    current: next[next.length - 1],
    next: []
  }),
};

export default (
  actionTypes
) => {
  const typedHandlers = Object.entries(handlers)
    .filter(([key]) => Object.prototype.hasOwnProperty.call(actionTypes, key))
    .reduce((acc, [key, value]) => (acc[actionTypes[key]] = value, acc), {});

  return reducer =>
    (state, action) => {
      if(Object.prototype.hasOwnProperty.call(typedHandlers, action.type))
        return typedHandlers[action.type](state, action);

      if(typeof state === 'undefined')
        return {
          prev: [],
          current: reducer(undefined, action),
          next: []
        };

      const current = reducer(state.current, action);
      if(current !== state.current)
        return {
          prev: [...state.prev, state.current],
          current,
          next: []
        };

      return state;
    };
};
