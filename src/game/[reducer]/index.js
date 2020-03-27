import { createReducer } from '#/ext/redux';

const defaultState = {
  moves: [],
  moveIndex: 0
};

export default createReducer(defaultState, {
  [['CHANGE_DIM', 'CHANGE_TO_WIN', 'CHANGE_PLAYERS']]: () => defaultState,

  'MAKE_MOVE': (state, { payload }) => ({
    ...state,
    moveIndex: state.moveIndex + 1,
    moves: [...state.moves.slice(0, state.moveIndex), payload]
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
