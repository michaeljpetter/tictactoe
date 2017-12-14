import { createReducer } from '../ext/redux';

const defaultState = {
  dim: 3,
  toWin: 3,
  players: 2
};

export default createReducer(defaultState, {
  'DIM_CHANGED': (state, { dim }) =>
    ({ ...state, dim, toWin: Math.min(state.toWin, dim) }),

  'TO_WIN_CHANGED': (state, { toWin }) =>
    ({ ...state, toWin }),

  'PLAYERS_CHANGED': (state, { players }) =>
    ({ ...state, players })
});
