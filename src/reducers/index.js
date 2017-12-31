import { createReducer } from '@ext/redux';

const newGame = {
  moves: [],
  moveIndex: 0
};

const defaultState = ({
  dim: 3,
  toWin: 3,
  players: 2,
  ...newGame
});

export default createReducer(defaultState, {
  'CHANGE_DIM': (state, { dim }) => ({
    ...state,
    dim,
    toWin: Math.min(state.toWin, dim),
    ...newGame
  }),

  'CHANGE_TO_WIN': (state, { toWin }) => ({
    ...state,
    toWin,
    ...newGame
  }),

  'CHANGE_PLAYERS': (state, { players }) => ({
    ...state,
    players,
    ...newGame
  }),

  'MAKE_MOVE': (state, { index }) => ({
    ...state,
    moveIndex: state.moveIndex + 1,
    moves: [...state.moves.slice(0, state.moveIndex), index]
  }),

  'UNDO': state => ({
    ...state,
    moveIndex: state.moveIndex - 1
  }),

  'UNDO_ALL': state => ({
    ...state,
    moveIndex: 0
  }),

  'REDO': state => ({
    ...state,
    moveIndex: state.moveIndex + 1
  }),

  'REDO_ALL': state => ({
    ...state,
    moveIndex: state.moves.length
  })
});
