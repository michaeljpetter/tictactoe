import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { curryN, flow } from 'lodash/fp';

export default action => {
  const dispatch = useDispatch();
  return useCallback(  //eslint-disable-line react-hooks/exhaustive-deps
    curryN(action.length, flow(action, dispatch)),
    [action, dispatch]
  );
};
