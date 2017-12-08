import { createReducer } from '../ext/redux';

const defaultState = {
  dim: 3,
  toWin: 3,
  players: 2
};

export default createReducer(defaultState, {
  'DIM_SELECTED': (state, { dim }) =>
    ({ ...state, dim, toWin: Math.min(state.toWin, dim) }),

  'TO_WIN_SELECTED': (state, { toWin }) =>
    ({ ...state, toWin }),

  'PLAYERS_SELECTED': (state, { players }) =>
    ({ ...state, players })
});
