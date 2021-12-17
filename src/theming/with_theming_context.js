import React, { forwardRef } from 'react';
import { ThemingContext } from './internal';
import getDisplayName from 'react-display-name';

export default value => Component => {
  const WithThemingContext = forwardRef((props, ref) => (
    <ThemingContext.Provider value={value}>
      <Component ref={ref} {...props} />
    </ThemingContext.Provider>
  ));

  if(process.env.NODE_ENV !== 'production')
    WithThemingContext.displayName = `WithThemingContext(${getDisplayName(Component)})`;

  return WithThemingContext;
};
