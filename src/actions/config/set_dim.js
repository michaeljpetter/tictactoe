export default dim =>
  dispatch => {
    dispatch({ type: 'SET_DIM', dim });
  };
