import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

const history = createBrowserHistory();

export { history };

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware(history)];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(createRootReducer(history), enhancer);

sagaMiddleware.run(rootSaga);

export default store;
