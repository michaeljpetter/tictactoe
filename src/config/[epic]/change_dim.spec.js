import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';
import changeDimEpic from './change_dim';
import { changeDim, changeToWin } from '../[actions]';

subject(() => {
  const action$ = of({ type: 'OTHER' }, changeDim(dim));
  const state$ = of({ config: { toWin } });

  return changeDimEpic(action$, state$).pipe(toArray()).toPromise();
});

set('toWin', 5);

describe('when dim is not below toWin', () => {
  set('dim', [7, 5]);

  it('does nothing', async () => {
    expect(await subject).toEqual([]);
  });
});

describe('when dim is below toWin', () => {
  set('dim', [7, 3]);

  it('reduces toWin', async () => {
    expect(await subject).toEqual([
      changeToWin(3)
    ]);
  });
});
