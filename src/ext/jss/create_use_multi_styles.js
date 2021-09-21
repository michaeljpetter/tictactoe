import { createUseStyles } from 'react-jss';
import { __, concat, curryRight, flip, flow, identity, map, mergeAllWith, over, overArgs } from 'lodash/fp';
import { nary } from '#/ext/fp';
import classNames from 'classnames';

export default nary(2, flow(
  overArgs(flip(map), [identity, curryRight(createUseStyles)]),
  over,
  concat(__, mergeAllWith(nary(2, classNames))),
  flow
));
