import { createSelector } from 'reselect';
import '../ext/ruby';

export default createSelector(
  state => state.dim,
  state => state.toWin,
  (dim, toWin) => {
    const line = [...toWin.times()];
    const dims = [...dim.times()];
    const shifts = [...(dim - toWin + 1).times()];

    return [].concat(...shifts.map(s => [
      //rows —
      ...dims.map(r => line.map(i => r * dim + (i + s))),
      //columns |
      ...dims.map(c => line.map(i => c + dim * (i + s))),
      //diagonals \
      ...shifts.map(d => line.map(i => s * dim + d + i * (dim + 1))),
      //diagonals /
      ...shifts.map(d => line.map(i => s * dim - d + (i + 1) * (dim - 1)))
    ]));
  }
);
