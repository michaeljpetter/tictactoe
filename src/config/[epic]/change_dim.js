import { ofType } from 'redux-observable';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { toWin } from '../[selectors]';
import { changeToWin } from '../[actions]';

export default (action$, state$) => action$.pipe(
  ofType('CHANGE_DIM'),
  map(({ payload }) => Math.min(...payload)),
  withLatestFrom(state$.pipe(map(toWin))),
  filter(([min, toWin]) => min < toWin),
  map(([min]) => changeToWin(min))
);
