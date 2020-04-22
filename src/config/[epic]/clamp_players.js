import { ofType } from 'redux-observable';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { players, playersOptions } from '../[selectors]';
import { changePlayers } from '../[actions]';
import { over } from 'lodash/fp';

export default (action$, state$) => action$.pipe(
  ofType('CHANGE_DIM', 'CHANGE_TO_WIN'),
  withLatestFrom(
    state$.pipe(map(over([playersOptions, players]))),
    (_, [playersOptions, players]) => [Math.max(...playersOptions), players]
  ),
  filter(([max, players]) => max < players),
  map(([max]) => changePlayers(max))
);
