import { ofType } from 'redux-observable';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { toWin, toWinOptions } from '../[selectors]';
import { changeToWin } from '../[actions]';
import { over } from 'lodash/fp';

export default (action$, state$) => action$.pipe(
  ofType('CHANGE_DIM'),
  withLatestFrom(
    state$.pipe(map(over([toWinOptions, toWin]))),
    (_, [toWinOptions, toWin]) => [Math.max(...toWinOptions), toWin]
  ),
  filter(([max, toWin]) => max < toWin),
  map(([max]) => changeToWin(max))
);
