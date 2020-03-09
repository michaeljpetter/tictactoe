import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { curryN, flow } from 'lodash/fp';

export default action => {
  const dispatch = useDispatch();
  return useCallback(
    curryN(action.length, flow(action, dispatch)),
    [action, dispatch]
  );
};
