import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { curryN, flow } from 'lodash/fp';

export const createReducer = (defaultState, handlers) =>
  (state = defaultState, action) =>
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;

export const useAction = action => {
  const dispatch = useDispatch();
  return useCallback(
    curryN(action.length, flow(action, dispatch)),
    [action, dispatch]
  );
};
