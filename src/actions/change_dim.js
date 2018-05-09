export default (width, height) => {
  height = height || width;

  return (dispatch, getState) => {
    if(width !== getState().width || height !== getState().height)
      dispatch({ type: 'CHANGE_DIM', payload: { width, height } });
  };
};
