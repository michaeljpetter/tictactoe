import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';
import clampPlayersEpic from './clamp_players';
import { changeDim, changePlayers, changeToWin } from '../[actions]';
import { createFixture, expect } from '#/ext/jest';
const { subject, set, describe, it } = createFixture();

subject(({ action, dim, toWin, players }) => {
  const action$ = of({ type: 'OTHER' }, action);
  const state$ = of({ config: { dim, toWin, players } });

  return clampPlayersEpic(action$, state$).pipe(toArray()).toPromise();
});

set('dim', [3, 4]);
set('toWin', 4);

[
  { name: 'when dim changed', action: ({ dim }) => changeDim(dim) },
  { name: 'when toWin changed', action: ({ toWin }) => changeToWin(toWin) },
].
forEach(({ name, ...c }) => {
  describe(name, () => {
    set.from(c);

    describe('when players is within options', () => {
      set('players', 3);
    
      it('does nothing', () => expect.it.resolves.toEqual([]));
    });
    
    describe('when players exceeds options', () => {
      set('players', 4);
    
      it('reduces players', () => expect.it.resolves.toEqual([changePlayers(3)]));
    });
  });
});
