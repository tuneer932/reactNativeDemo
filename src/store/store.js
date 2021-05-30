import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () =>
  createStore(reducer, applyMiddleware(sagaMiddleware));

export const store = configureStore();

sagaMiddleware.run(rootSaga);