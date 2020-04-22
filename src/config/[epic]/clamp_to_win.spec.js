import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';
import clampToWinEpic from './clamp_to_win';
import { changeDim, changeToWin } from '../[actions]';

subject(() => {
  const action$ = of({ type: 'OTHER' }, changeDim(dim));
  const state$ = of({ config: { dim, toWin } });

  return clampToWinEpic(action$, state$).pipe(toArray()).toPromise();
});

set('dim', [5, 3]);

describe('when toWin is within options', () => {
  set('toWin', 3);

  it('does nothing', async () => {
    expect(await subject).toEqual([]);
  });
});

describe('when toWin exceeds options', () => {
  set('toWin', 5);

  it('reduces toWin', async () => {
    expect(await subject).toEqual([
      changeToWin(3)
    ]);
  });
});
