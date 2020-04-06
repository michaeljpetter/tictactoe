import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';
import lockDimEpic from './lock_dim';
import { changeDim, lockDim } from '../[actions]';
import { once } from 'lodash/fp';

let dim;
let subject;

beforeEach(() => {
  dim = undefined;

  subject = once(() => {
    const action$ = of({ type: 'OTHER' }, lockDim());
    const state$ = of({ config: { dim } });

    return lockDimEpic(action$, state$).pipe(toArray()).toPromise();
  });
});

describe('when square', () => {
  beforeEach(() => {
    dim = [4, 4];
  });

  it('does nothing', async () => {
    expect(await subject()).toEqual([]);
  });
});

describe('when not square', () => {
  beforeEach(() => {
    dim = [4, 7];
  });

  it('changes to square', async () => {
    expect(await subject()).toEqual([
      changeDim([4, 4])
    ]);
  });
});
