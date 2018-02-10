import createAction from '../helpers/actionCreator';
import actionTypes, {DEFAULT_ERROR} from './constants';
import {fetchProducts} from './api';

const startFetching = () =>
  createAction(actionTypes.START_FETCH_PRODUCTS);

const finishFetching = () =>
  createAction(actionTypes.FINISH_FETCH_PRODUCTS);

const setError = error =>
  createAction(actionTypes.SET_PRODUCTS_ERROR, {error});

const setProducts = data =>
  createAction(actionTypes.SET_PRODUCTS, {data});

export const getProducts = () => {
  return dispatch => {
    dispatch(startFetching());

    return fetchProducts()
      .then(
        ({body = [] } = {}) => dispatch(setProducts(body)),
        ({message = DEFAULT_ERROR} = {}) => dispatch(setError(message))
      )
      .then(() => dispatch(finishFetching()));
  };
};

export const deleteError = () => createAction(actionTypes.REMOVE_PRODUCTS_ERROR);
