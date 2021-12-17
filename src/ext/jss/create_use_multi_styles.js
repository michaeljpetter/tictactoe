import { createUseStyles } from 'react-jss';
import { __, assignAllWith, concat, curryRight, flip, flow, identity, map, over, overArgs } from 'lodash/fp';
import { nary } from '#/ext/fp';
import classNames from 'classnames';

export default nary(2, flow(
  overArgs(flip(map), [identity, curryRight(createUseStyles)]),
  over,
  concat(__, assignAllWith(nary(2, classNames))),
  flow
));
