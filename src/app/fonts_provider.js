import { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import toCapitalCase from 'to-capital-case';
import { flow, map, tap, get } from 'lodash/fp';

const createUseFonts = flow(
  map.convert({ cap: false })(
    (url, name) => ({
      fontFamily: toCapitalCase(name),
      src: `url(${url})`
    })
  ),
  faces => ({ '@font-face': faces }),
  createUseStyles
);

const useFonts = fonts => {
  useMemo(() => createUseFonts(fonts), [fonts])();
};

const FontsProvider = flow(
  tap(flow(get('fonts'), useFonts)),
  get('children')
);

export default FontsProvider;
