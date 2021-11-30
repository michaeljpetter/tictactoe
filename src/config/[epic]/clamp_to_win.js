import { ofType } from 'redux-observable';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { toWin, toWinRange } from '../[selectors]';
import { changeToWin } from '../[actions]';
import { over } from 'lodash/fp';

export default (action$, state$) => action$.pipe(
  ofType('CHANGE_DIM'),
  withLatestFrom(
    state$.pipe(map(over([toWinRange, toWin]))),
    (_, [[, max], toWin]) => [max, toWin]
  ),
  filter(([max, toWin]) => max < toWin),
  map(([max]) => changeToWin(max))
);
