import { createSelector } from 'reselect';
import { range } from 'lodash';

export default createSelector(
  state => state.dim,
  state => state.toWin,
  (dim, toWin) => {
    const line = range(toWin); 
    const dims = range(dim);
    const shifts = range(dim - toWin + 1);

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
