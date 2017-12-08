export default players =>
  dispatch => {
    dispatch({ type: 'PLAYERS_SELECTED', players });
  };
