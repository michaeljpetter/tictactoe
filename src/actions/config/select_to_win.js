export default toWin =>
  dispatch => {
    dispatch({ type: 'TO_WIN_SELECTED', toWin });
  };
