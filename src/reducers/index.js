import { chain } from 'lodash';
import { createReducer } from '../ext/redux';
import wins from '../selectors/wins';

const reset = dim => ({
  moves: [{
    squares: Array(dim * dim),
    player: 1
  }],
  activeMoveIndex: 0
});

const defaultState = {
  dim: 3,
  toWin: 3,
  players: 2,
  ...reset(3)
};

export default createReducer(defaultState, {
  'CHANGE_DIM': (state, { dim }) => ({
    ...state,
    dim,
    toWin: Math.min(state.toWin, dim),
    ...reset(dim)
  }),

  'CHANGE_TO_WIN': (state, { toWin }) => ({
    ...state,
    toWin,
    ...reset(state.dim)
  }),

  'CHANGE_PLAYERS': (state, { players }) => ({
    ...state,
    players,
    ...reset(state.dim)
  }),

  'MAKE_MOVE': (state, { index }) => {
    const { moves, activeMoveIndex } = state;
    const alreadyWon = wins(state).length;
    const active = moves[activeMoveIndex];

    if(alreadyWon || active.squares[index])
      return state;

    const move = {
      squares: chain([...active.squares]).tap(s => { s[index] = active.player }).value(),
      player: active.player % state.players + 1
    };

    return ({
      ...state,
      activeMoveIndex: activeMoveIndex + 1,
      moves: [...state.moves.slice(0, activeMoveIndex + 1), move]
    });
  },

  'JUMP_TO_MOVE': (state, { index }) => ({
    ...state,
    activeMoveIndex: index
  })
});
