import { ofType } from 'redux-observable';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { dim } from '../[selectors]';
import { changeDim } from '../[actions]';

export default (action$, state$) => action$.pipe(
  ofType('LOCK_DIM'),
  withLatestFrom(state$.pipe(map(dim)), (_, dim) => dim),
  filter(([width, height]) => width !== height),
  map(([width]) => changeDim([width, width]))
);
