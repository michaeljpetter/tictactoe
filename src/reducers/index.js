import { createReducer } from '@ext/redux';

const newGame = {
  moves: [],
  moveIndex: 0
};

const defaultState = ({
  width: 3,
  height: 3,
  toWin: 3,
  players: 2,
  ...newGame
});

export default createReducer(defaultState, {
  'CHANGE_DIM': (state, { payload: { width, height } }) => ({
    ...state,
    width,
    height,
    toWin: Math.min(state.toWin, width, height),
    ...newGame
  }),

  'CHANGE_TO_WIN': (state, { payload: toWin }) => ({
    ...state,
    toWin,
    ...newGame
  }),

  'CHANGE_PLAYERS': (state, { payload: players }) => ({
    ...state,
    players,
    ...newGame
  }),

  'MAKE_MOVE': (state, { payload: index }) => ({
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
