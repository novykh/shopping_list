import {createSelector} from 'reselect';
import {Map as immutableMap} from 'immutable';
import {selectProductsById} from '../products/selectors';

const getProduct = (state, props) => selectProductsById(state).get(props.id)
    || immutableMap.of();

export const makeSelectProduct = () => {
  return createSelector(
    getProduct,
    state => state.toJS()
  );
};
