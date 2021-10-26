import { createSelector } from 'reselect';
import { currentPlayer, playerSquares, remainingWinsPerPlayer } from './internal';
import { AutoMap } from '#/ext/collections';
import { __, concat, curry, filter, flatMap, flow, lt, map, orderBy, sumBy } from 'lodash/fp';
import { findIndexes, rotate } from '#/ext/fp';

const groupMovesByLineEmptyCount = curry((squares, lines) => {
  const groups = new AutoMap(() => new AutoMap(() => []));
  for(const line of lines) {
    const empty = line.filter(i => !squares[i]);
    for(const move of empty)
      groups.get(empty.length).get(move).push(line);
  }
  return groups;
});

const getLineCount = ([, { length }]) => length;

const getForks = flow(
  Array.from,
  filter(flow(getLineCount, lt(1))),
  orderBy(getLineCount, 'desc')
);

export default createSelector(
  currentPlayer,
  playerSquares,
  remainingWinsPerPlayer,
  (player, squares, remainingPerPlayer) => {
    const [self, ...opponents] = flow(
      rotate(1 - player),
      map(groupMovesByLineEmptyCount(squares))
    )(remainingPerPlayer);

    const ranks = new AutoMap(() => new AutoMap(() => []));

    for(const [move, lines] of self.get(1))
      ranks.get(move).get('win').push(...lines);

    for(const opponent of opponents)
      for(const [move, lines] of opponent.get(1))
        ranks.get(move).get('block').push(...lines);

    for(const [move, lines] of getForks(self.get(2)))
      ranks.get(move).get('fork').push(...lines);

    for(const opponent of opponents) {
      const forks = getForks(opponent.get(2));
      if(!forks.length)
        continue;

      if(1 === forks.length) {
        const [move, lines] = forks[0];
        ranks.get(move).get('blockFork').push(...lines);
        continue;
      }

      const safeSelfMoves = [...self.get(2)]
        .filter(([move, lines]) => lines.some(line =>
          !line.some(i => i !== move && forks.some(([move]) => move === i))
        ))
        .map(([move]) => move);

      const forksWithSelfMoves = forks.filter(([move]) => safeSelfMoves.includes(move));
      if(forksWithSelfMoves.length) {
        for(const [move, lines] of forksWithSelfMoves)
          ranks.get(move).get('blockFork').push(...lines);
        continue;
      }

      for(const move of safeSelfMoves)
        ranks.get(move).get('blockFork');
    }

    const [selfResidual, ...opponentsResidual] = map(flow(
      Array.from,
      orderBy(([empty]) => empty, 'asc'),
      flatMap(([, moves]) => [...moves]),
      concat(__, flow(findIndexes(p => !p), map(i => [i, []]))(squares)),
      filter(([move]) => !ranks.has(move)),
      moves => moves.reduce(
        (acc, [move, lines]) => (acc.get(move).push(...lines), acc),
        new AutoMap(() => [])
      )
    ), [self, ...opponents]);

    const sumOpponentsResidualLineCount = ([move]) =>
      sumBy(opp => opp.get(move).length, opponentsResidual);

    for(const [move, lines] of orderBy([getLineCount, sumOpponentsResidualLineCount], ['desc', 'desc'], [...selfResidual]))
      ranks.get(move).get('residual').push(...lines);

    return [...ranks].map(([move, reasons]) =>
      ({ move, reasons: Object.fromEntries(reasons) })
    );
  }
);
