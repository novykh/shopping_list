import {fromJS} from 'immutable';
import actionTypes from './constants';
import productReducer, {initialState as productInitialState} from '../product/reducer';
import productActionTypes from '../product/constants';

const initialState = {
  isFetching: true,
  byId: {},
  ids: [],
  error: null
};

const delegateActionToProduct = (state, id, type, payload) => {
  const productState = id
    ? state.getIn(['byId', id])
    : fromJS(productInitialState());

  return state.setIn(['byId', id], productReducer(productState, {type, payload}));
};

const updateIds = (state, id) => {
  const ids = state.get('ids');
  if (ids.includes(id)) {
    return state;
  }

  return state.set('ids', ids.push(id));
};

const setProducts = (state, data = []) => {
  if (!data || !data.length) {
    return state;
  }

  return state.withMutations(map => {
    // Remove error if any
    map.set('error', null);

    data.forEach(product => {
      const {id} = product;
      if (!id) {
        return;
      }

      delegateActionToProduct(map, id, productActionTypes.SET_PRODUCT, product);
      updateIds(map, id);
    });
  });
};

const updateProduct = (state, type, id, data = {}) =>
  delegateActionToProduct(state, id, type, data);

export default (state = fromJS(initialState), {type, payload = {}} = {}) => {

  switch (type) {
    case actionTypes.START_FETCH_PRODUCTS:
      return state
        .set('isFetching', true);

    case actionTypes.FINISH_FETCH_PRODUCTS:
      return state
        .set('isFetching', false);

    case actionTypes.SET_PRODUCTS_ERROR:
      return state
        .set('error', fromJS(payload.error));

    case actionTypes.REMOVE_PRODUCTS_ERROR:
      return state
        .set('error', null);

    case actionTypes.SET_PRODUCTS:
      return setProducts(state, payload.data);

    case productActionTypes.SET_PRODUCT:
    case productActionTypes.START_FETCH_PRODUCT:
    case productActionTypes.FINISH_FETCH_PRODUCT:
      return updateProduct(state, type, payload.id, payload.data);

    case productActionTypes.SET_PRODUCT_ERROR:
      return updateProduct(state, type, payload.id, payload.error);

    default:
      return state;
  }
};
