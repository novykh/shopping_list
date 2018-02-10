import createAction from '../helpers/actionCreator';
import actionTypes from './constants';

export const addToCart = id =>
  createAction(actionTypes.ADD_TO_CART, {id});

export const removeFromCart = (id, amount) =>
  createAction(actionTypes.REMOVE_FROM_CART, {id, amount});

export const removeAllFromCart = () =>
  createAction(actionTypes.REMOVE_ALL_FROM_CART);

export const checkoutCart = () =>
  createAction(actionTypes.CHECKOUT_CART);
