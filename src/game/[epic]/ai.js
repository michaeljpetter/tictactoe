import { ofType } from 'redux-observable';
import { of, timer } from 'rxjs';
import { delayWhen, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { aiDelay, aiMove } from '../[selectors]';
import { makeMove } from '../[actions]';
import { over } from 'lodash/fp';

export default (action$, state$) => action$.pipe(
  ofType('RESET', 'MAKE_MOVE', 'CHANGE_DIM', 'CHANGE_TO_WIN', 'CHANGE_PLAYERS', 'CHANGE_AI', 'UNDO', 'UNDO_ALL', 'REDO', 'REDO_ALL'),
  withLatestFrom(state$.pipe(map(over([aiMove, aiDelay])))),
  switchMap(([, state]) => of(state).pipe(
    filter(([move]) => move != null),
    delayWhen(([, delay]) => timer(delay)),
    map(([move]) => makeMove(move))
  ))
);
