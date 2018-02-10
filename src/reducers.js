import {combineReducers} from 'redux-immutable';
import {routerReducer} from 'react-router-redux';
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';

export default () => {
  return combineReducers({
    router: routerReducer,
    products: productsReducer,
    cart: cartReducer
  });
};
