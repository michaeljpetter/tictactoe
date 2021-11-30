import { ofType } from 'redux-observable';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { players, playersRange } from '../[selectors]';
import { changePlayers } from '../[actions]';
import { over } from 'lodash/fp';

export default (action$, state$) => action$.pipe(
  ofType('CHANGE_DIM', 'CHANGE_TO_WIN'),
  withLatestFrom(
    state$.pipe(map(over([playersRange, players]))),
    (_, [[, max], players]) => [max, players]
  ),
  filter(([max, players]) => max < players),
  map(([max]) => changePlayers(max))
);
