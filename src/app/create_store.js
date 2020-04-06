import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import reducer from '../reducer';
import epic from '../epic';

export default () => {
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(epicMiddleware)
    )
  );

  epicMiddleware.run(epic);

  return store;
};
