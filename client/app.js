import 'babel-polyfill';
import React from 'react';
import thunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import {
  Provider,
} from 'react-redux';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
} from 'react-router';
import fetchMiddleware from 'redux-middleware-fetch';
import {
  syncHistoryWithStore,
  routerMiddleware,
} from 'react-router-redux';
import reducer from './reducers/index';

// routes
import MainBoard from './containers/MainBoard.js';
import IndexPage from './containers/IndexPage.js';

import ReceivePage from './containers/ReceivePage.js'

export const store = createStore(reducer, {}, compose(
  applyMiddleware(
    thunk,
    routerMiddleware(browserHistory),
    fetchMiddleware,
  ),
));

const history = syncHistoryWithStore(browserHistory, store);

export default (
  <AppContainer>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={MainBoard}>
          <Route path=":key" component={ReceivePage} />
          <IndexRoute component={IndexPage} />
        </Route>
      </Router>
    </Provider>
  </AppContainer>
);
