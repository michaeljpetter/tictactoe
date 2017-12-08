export default players =>
  dispatch => {
    dispatch({ type: 'SET_PLAYERS', players });
  };
