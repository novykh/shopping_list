import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import {createBrowserHistory} from 'history';

import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router-dom';
import App from './app';

const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path='/' component={App} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

render();
