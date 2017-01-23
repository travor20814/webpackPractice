import React from 'react';
import thunk from 'redux-thunk';
import {
  Router,
  Route,
  IndexRoute,
  useRouterHistory,
} from 'react-router';
import {
  createHistory,
} from 'history';
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import reducer from './reducers/index.js';
import {
  syncHistoryWithStore,
  routerMiddleware,
} from 'react-router-redux';
import {
  Provider,
} from 'react-redux';

const history = useRouterHistory(createHistory)({
  basename: URL_BASEPATH,
});

export const store = createStore(reducer, {}, compose(
  applyMiddleware(
    thunk,
    routerMiddleware(history),
  ),
));

import MainBoard from './containers/MainBoard.js';
import IndexPage from './containers/IndexPage.js';

const storeHistory = syncHistoryWithStore(history, store);

export default (
  <Provider store={store}>
    <Router history={storeHistory}>
      <Route path="/" component={MainBoard}>
        <IndexRoute component={IndexPage} />
      </Route>
    </Router>
  </Provider>
);
