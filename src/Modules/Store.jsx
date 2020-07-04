import rootReducers from './RootReducer';
import rootSagas from './RootSaga';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import history from '../Utils/History';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
export const store = createStore(rootReducers(history), composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSagas);
export const persistor = persistStore(store);
