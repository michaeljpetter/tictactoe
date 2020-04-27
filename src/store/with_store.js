import React, { forwardRef, useMemo } from 'react';
import { Provider } from 'react-redux';
import createStore from './create_store';
import getDisplayName from 'react-display-name';

export default Component => {
  const WithStore = forwardRef((props, ref) => (
    <Provider store={useMemo(createStore, [])}>
      <Component ref={ref} {...props} />
    </Provider>
  ));

  if(process.env.NODE_ENV !== 'production')
    WithStore.displayName = `WithStore(${getDisplayName(Component)})`;

  return WithStore;
};
