import {createSelector} from 'reselect';
import {makeSelectProduct} from '../product/selectors';
import {Map as immutableMap} from 'immutable';
import calculatePrice from '../helpers/priceCalculator';

const cartState = state => state.get('cart');

export const selectIds = createSelector(
  cartState,
  state => state.keySeq().toArray()
);

export const makeSelectItem = () => {
  const selectProduct = makeSelectProduct();

  return createSelector(
    (state, props) => selectProduct(state, props),
    (state, props) => cartState(state).get(props.id) || immutableMap.of(),
    (product, item) => {
      const amount = item.get('amount') || 1;
      const {price, name, offerType} = product;

      return {
        name,
        amount,
        price,
        totalPrice: calculatePrice(offerType)(amount, price)
      };
    }
  );
};

export const selectCartProps = createSelector(
  selectIds,
  state => state,
  (ids, state) => {
    const selectItem = makeSelectItem();

    const total = ids.reduce((sum, id) => {
      const {totalPrice} = selectItem(state, {id});
      return sum + totalPrice;
    }, 0);

    return {
      ids,
      totalPrice: total
    };
  }
);
