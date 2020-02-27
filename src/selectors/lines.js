import { createSelector } from 'reselect';
import dim from './dim';
import toWin from './to_win';
import { range } from 'lodash/fp';

export default createSelector(
  dim,
  toWin,
  ([width, height], toWin) => {
    const line = range(0, toWin);
    const wshifts = range(0, width - toWin + 1);
    const hshifts = range(0, height - toWin + 1);

    return [].concat(
      //rows —
      ...wshifts.map(s => range(0, height).map(r =>
        line.map(i => r * width + (i + s))
      )),
      //columns |
      ...hshifts.map(s => range(0, width).map(c =>
        line.map(i => c + width * (i + s))
      )),
      //diagonals \
      ...hshifts.map(s => wshifts.map(d =>
        line.map(i => s * width + d + i * (width + 1))
      )),
      //diagonals /
      ...hshifts.map(s => wshifts.map(d =>
        line.map(i => s * width - d + (i + 1) * (width - 1))
      )),
    );
  }
);
