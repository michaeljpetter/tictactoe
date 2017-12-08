export default toWin =>
  dispatch => {
    dispatch({ type: 'SET_TO_WIN', toWin });
  };
