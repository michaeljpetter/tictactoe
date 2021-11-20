import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { delay, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { ai } from '#/config/[selectors]';
import { currentPlayer } from '../[selectors]/internal';
import { rankedMoves } from '../[selectors]';
import { makeMove } from '../[actions]';
import { over } from 'lodash/fp';

export default (action$, state$) => action$.pipe(
  ofType('RESET', 'MAKE_MOVE', 'CHANGE_DIM', 'CHANGE_TO_WIN', 'CHANGE_PLAYERS', 'CHANGE_AI', 'UNDO', 'UNDO_ALL', 'REDO', 'REDO_ALL'),
  withLatestFrom(state$.pipe(map(over([currentPlayer, ai, rankedMoves])))),
  switchMap(([, state]) => of(state).pipe(
    filter(([player, ai]) => player != null && ai[player]),
    map(([,, [{ move }]]) => makeMove(move)),
    delay(300)
  ))
);
