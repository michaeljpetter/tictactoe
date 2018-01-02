import { createSelector } from 'reselect';
import { range } from 'lodash';

export default createSelector(
  state => state.width,
  state => state.height,
  state => state.toWin,
  (width, height, toWin) => {
    const line = range(toWin); 
    const wshifts = range(width - toWin + 1);
    const hshifts = range(height - toWin + 1);

    return [].concat(
      //rows —
      ...wshifts.map(s => range(height).map(r =>
        line.map(i => r * width + (i + s))
      )),
      //columns |
      ...hshifts.map(s => range(width).map(c =>
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
