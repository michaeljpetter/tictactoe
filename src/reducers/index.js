import { chain } from 'lodash';
import { createReducer } from '../ext/redux';
import wins from '../selectors/wins';

const reset = dim => ({
  moves: [{
    squares: Array(dim * dim),
    player: 1
  }],
  moveIndex: 0
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
    const { moves, moveIndex } = state;
    const alreadyWon = wins(state).length;
    const prev = moves[moveIndex];

    if(alreadyWon || prev.squares[index])
      return state;

    const move = {
      squares: chain([...prev.squares]).tap(s => { s[index] = prev.player }).value(),
      player: prev.player % state.players + 1
    };

    return ({
      ...state,
      moveIndex: state.moveIndex + 1,
      moves: [...state.moves.slice(0, state.moveIndex + 1), move]
    });
  },

  'JUMP_TO_MOVE': (state, { moveIndex }) => ({
    ...state,
    moveIndex
  })
});
