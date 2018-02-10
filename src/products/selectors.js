import {createSelector} from 'reselect';

const productsState = state => state.get('products');

export const selectIsFetching = createSelector(
  productsState,
  state => state.get('isFetching')
);

export const selectIds = createSelector(
  productsState,
  state => state.get('ids')
);

export const selectProductsById = createSelector(
  productsState,
  state => state.get('byId')
);

export const selectProductsError = createSelector(
  productsState,
  state => state.get('error')
);
