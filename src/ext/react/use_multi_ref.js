import { useCallback } from 'react';

export default (...refs) =>
  useCallback(
    element => {
      for(const ref of refs) {
        if(typeof ref === 'function')
          ref(element);
        else if(ref != null) {
          if(process.env.NODE_ENV !== 'production') {
            if(!(typeof ref === 'object' && 'current' in ref))
              throw new Error(`unknown ref type: ${ref}`);
          }
          ref.current = element;
        }
      }
    },
    refs  //eslint-disable-line react-hooks/exhaustive-deps
  );
