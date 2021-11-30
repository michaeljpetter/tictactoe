import { useCallback, useEffect } from 'react';

const events = ['mousedown', 'touchstart', 'pointerdown'];

export default (element, callback) => {
  const handler = useCallback(
    e => {
      if(element && !element.contains(e.target))
        callback(e);
    },
    [element, callback]
  );

  useEffect(
    () => (
      events.forEach(e => document.addEventListener(e, handler)),
      () => events.forEach(e => document.removeEventListener(e, handler))
    ),
    [handler]
  );
};
