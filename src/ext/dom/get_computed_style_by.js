import { __, curry, isElement, iteratee, overArgs } from "lodash/fp";

export default overArgs(__, iteratee)(
  curry((iteratee, element) => {
    if(!isElement(element)) {
      if(process.env.NODE_ENV !== 'production') {
        if(element != null)
          throw new Error(`expected an element, but received: ${element}`)
      }
      return;
    }

    return iteratee(window.getComputedStyle(element));
  })
);
