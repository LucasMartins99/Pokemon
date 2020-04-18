import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import persistReducers from './persistReducer';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddlewares = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddlewares];
const store = createStore(persistReducers(rootReducer), middlewares);

sagaMiddlewares.run(rootSaga);
export { store };
