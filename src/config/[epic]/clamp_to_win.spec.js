import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();
import clampToWinEpic from './clamp_to_win';
import { changeDim, changeToWin } from '../[actions]';
import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';

subject(({ dim, toWin }) => {
  const action$ = of({ type: 'OTHER' }, changeDim(dim));
  const state$ = of({ config: { dim, toWin } });

  return clampToWinEpic(action$, state$).pipe(toArray()).toPromise();
});

set('dim', [5, 3]);

describe('when toWin is within options', () => {
  set('toWin', 3);

  it('does nothing', () => expect.it.resolves.toEqual([]));
});

describe('when toWin exceeds options', () => {
  set('toWin', 5);

  it('reduces toWin', () => expect.it.resolves.toEqual([changeToWin(3)]));
});
