import { dim } from '../[selectors]';
import changeDim from './change_dim';

const lockDim = () =>
  ({ type: 'LOCK_DIM' });

export default () =>
  (dispatch, getState) => {
    dispatch(lockDim());

    const [width, height] = dim(getState());
    if(width !== height)
      dispatch(changeDim([width, width]));
  };
