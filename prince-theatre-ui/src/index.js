import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import store, { history } from './containers/store';

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
