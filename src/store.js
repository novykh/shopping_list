import {createStore, applyMiddleware, compose} from 'redux';
import {fromJS} from 'immutable';
import {routerMiddleware} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    routerMiddleware(history),
    thunkMiddleware
  ];

  const composeEnhancers = (
    process.env.NODE_ENV !== 'production'
      && (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
  );

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
}
