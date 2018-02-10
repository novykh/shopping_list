import {fromJS} from 'immutable';
import actionTypes from './constants';

const initialState = {};

const getAmount = (state, id) =>
  state.getIn([id, 'amount']) || 0;

const increaseAmount = (state, {id, amount = 1}) => {
  const currentAmount = getAmount(state, id);

  return state.setIn([id, 'amount'], currentAmount + amount);
};

const decreaseAmount = (state, {id, amount = 1}) => {
  const currentAmount = getAmount(state, id);

  amount = currentAmount - amount;
  if (amount <= 0) {
    return state.delete(id);
  }

  return state.setIn([id, 'amount'], amount);
};

export default (state = fromJS(initialState), {type, payload = {}} = {}) => {

  switch (type) {

    case actionTypes.ADD_TO_CART:
      return increaseAmount(state, payload);

    case actionTypes.REMOVE_FROM_CART:
      return decreaseAmount(state, payload);

    case actionTypes.REMOVE_ALL_FROM_CART:
    case actionTypes.CHECKOUT_CART:
      return fromJS(initialState);

    default:
      return state;
  }
};
