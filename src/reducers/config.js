import { createReducer } from '../ext/redux';

const defaultState = {
  dim: 3,
  toWin: 3,
  players: 2
};

export default createReducer(defaultState, {
  'SET_DIM': (state, { dim }) =>
    ({ ...state, dim, toWin: Math.min(state.toWin, dim) }),

  'SET_TO_WIN': (state, { toWin }) =>
    ({ ...state, toWin }),

  'SET_PLAYERS': (state, { players }) =>
    ({ ...state, players })
});
