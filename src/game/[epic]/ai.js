import { ofType } from 'redux-observable';
import { of, timer } from 'rxjs';
import { delayWhen, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { createStructuredSelector } from 'reselect';
import { ai } from '#/config/[selectors]';
import { aiDelay, currentPlayer, rankedMoves } from '../[selectors]';
import { makeMove } from '../[actions]';

export default (action$, state$) => action$.pipe(
  ofType('RESET', 'MAKE_MOVE', 'CHANGE_DIM', 'CHANGE_TO_WIN', 'CHANGE_PLAYERS', 'CHANGE_AI', 'UNDO', 'UNDO_ALL', 'REDO', 'REDO_ALL'),
  withLatestFrom(state$.pipe(map(createStructuredSelector({ currentPlayer, ai, rankedMoves, aiDelay })))),
  switchMap(([, state]) => of(state).pipe(
    filter(({ currentPlayer, ai }) => currentPlayer != null && ai[currentPlayer]),
    delayWhen(({ aiDelay }) => timer(aiDelay)),
    map(({ rankedMoves: [{ move }] }) => makeMove(move))
  ))
);
