import { createReducer } from '../ext/redux';
import winner from '../selectors/winner';
import squares from '../selectors/squares';

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

  'MAKE_MOVE': (state, { index }) => {
    if(winner(state) || squares(state)[index])
      return state;

    const { moves, moveIndex } = state;
    return ({
      ...state,
      moveIndex: moveIndex + 1,
      moves: [...moves.slice(0, moveIndex), index]
    });
  },

  'JUMP_TO_MOVE': (state, { index }) => ({
    ...state,
    moveIndex: index
  })
});
