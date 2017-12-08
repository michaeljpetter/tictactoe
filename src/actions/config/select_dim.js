export default dim =>
  dispatch => {
    dispatch({ type: 'DIM_SELECTED', dim });
  };
