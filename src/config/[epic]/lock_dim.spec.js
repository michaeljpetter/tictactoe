import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';
import lockDimEpic from './lock_dim';
import { changeDim, lockDim } from '../[actions]';
import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();

subject(({ dim }) => {
  const action$ = of({ type: 'OTHER' }, lockDim());
  const state$ = of({ config: { dim } });

  return lockDimEpic(action$, state$).pipe(toArray()).toPromise();
});

describe('when square', () => {
  set('dim', [4, 4]);

  it('does nothing', () => expect.it.resolves.toEqual([]));
});

describe('when not square', () => {
  set('dim', [4, 7]);

  it('changes to square', () => expect.it.resolves.toEqual([changeDim([4, 4])]));
});
