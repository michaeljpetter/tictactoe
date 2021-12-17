import React, { forwardRef, useContext } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import ThemingContext from './theming_context';
import getDisplayName from 'react-display-name';
import classNames from 'classnames';
import { __, assign, assignWith, bindKey, flow, get, invert, lowerFirst, mapKeys, mapValues, over } from 'lodash/fp';
import { nary, partitionKeys } from '#/ext/fp';

const styleSuffix = /[Cc]lassName$/;
const hasStyleSuffix = bindKey(styleSuffix, 'test');

export default props => Component => {
  const componentDisplayName = getDisplayName(Component);

  const [styleProps, renderProps] = partitionKeys(hasStyleSuffix, props);

  const useStyleProps = (() => {
    const styleNames = mapValues.convert({ cap: false })(
      (_, propName) => propName.replace(styleSuffix, '') || lowerFirst(componentDisplayName),
      styleProps
    );

    return flow(
      (styles => createUseStyles(theme =>
        mapValues(style => ({ context, props }) => style(get(context, theme), props), styles)
      ))(
        mapKeys(get(__, styleNames), styleProps)
      ),
      mapKeys(get(__, invert(styleNames))),
    );
  })();

  const useRenderProps = ({ context, props }) => {
    const theme = useTheme();
    return mapValues(render => render(get(context, theme), props), renderProps);
  };

  const useMergedProps = flow(
    over([get('props'), useStyleProps, useRenderProps]),
    ([props, styleProps, renderProps]) =>
      assign(assignWith(nary(2, classNames), props, styleProps), renderProps)
  );

  const WithTheming = forwardRef((props, ref) => (
    <Component ref={ref} {...useMergedProps({ context: useContext(ThemingContext), props })} />
  ));

  if(process.env.NODE_ENV !== 'production')
    WithTheming.displayName = `WithTheming(${componentDisplayName})`;

  return WithTheming;
};
