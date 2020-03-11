import { dim as dimSelector } from '../[selectors]';
import { isEqual } from 'lodash/fp';

export default dim =>
  (dispatch, getState) => {
    if(!isEqual(dimSelector(getState()), dim))
      dispatch({ type: 'CHANGE_DIM', payload: dim });
  };
