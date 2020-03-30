import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import lockDim from './lock_dim';
import { once } from 'lodash/fp';

const mockStore = configureStore([thunk]);

let dim;
let subject;

beforeEach(() => {
  dim = undefined;

  subject = once(() => {
    const store = mockStore({ config: { dim } });
    store.dispatch(lockDim());
    return store.getActions();
  });
});

describe('when square', () => {
  beforeEach(() => {
    dim = [4, 4];
  });

  it('locks only', () => {
    expect(subject()).toEqual([
      { type: 'LOCK_DIM' }
    ])
  });
});

describe('when not square', () => {
  beforeEach(() => {
    dim = [4, 7];
  });

  it('locks and squares', () => {
    expect(subject()).toEqual([
      { type: 'LOCK_DIM' },
      { type: 'CHANGE_DIM', payload: [4, 4] }
    ])
  });
});
