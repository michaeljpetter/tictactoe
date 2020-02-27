import { dim } from '@selectors';

export default (width, height) =>
  (dispatch, getState) => {
    const [w, h] = dim(getState());
    if(width !== w || height !== h)
      dispatch({ type: 'CHANGE_DIM', payload: { width, height } });
  };
