import React, { forwardRef } from 'react';
import { ThemeProvider } from 'react-jss';
import { useSelector } from 'react-redux';
import { theme } from './[selectors]';
import * as themes from '#/themes';
import getDisplayName from 'react-display-name';

export default Component => {
  const WithTheme = forwardRef((props, ref) => (
    <ThemeProvider theme={themes[useSelector(theme)]}>
      <Component ref={ref} {...props} />
    </ThemeProvider>
  ));

  if(process.env.NODE_ENV !== 'production')
    WithTheme.displayName = `WithTheme(${getDisplayName(Component)})`;

  return WithTheme;
};
